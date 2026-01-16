const functions = require("firebase-functions");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access Gemini key from Firebase config
const genAI = new GoogleGenerativeAI(
  functions.config().gemini.key
);

exports.askGemini = functions.https.onRequest(async (req, res) => {
  try {
    const prompt = req.body.prompt;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);

    res.json({
      reply: result.response.text()
    });
  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({ error: error.message });
  }
});
