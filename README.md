# Firebase App - Setup & Run Instructions

## 1. Configuration
**Important:** Before running, you must add your Gemini API Key.

1. Open `dashboard.html`.
2. Locate the line:
   ```javascript
   const GEMINI_API_KEY = "YOUR_API_KEY_HERE";
   ```
3. Replace `"YOUR_API_KEY_HERE"` with your actual Google Gemini API Key.

## 2. Running Locally
Since this project uses JavaScript Modules, you cannot just double-click the HTML files. You need a local web server.

### Option A: Using VS Code Live Server (Recommended)
If you have the "Live Server" extension installed in VS Code:
1. Right-click on `login.html`.
2. Select "Open with Live Server".

### Option B: Using npx (Node.js)
If you have Node.js installed:
1. Open a terminal in this folder.
2. Run the following command:
   ```bash
   npx serve .
   ```
3. Open the URL shown (usually `http://localhost:3000/login.html`).

### Option C: Using Python
If you have Python installed:
1. Open a terminal in this folder.
2. Run:
   ```bash
   python -m http.server
   ```
3. Go to `http://localhost:8000/login.html`.

## 3. Deploying to Firebase
To publish your app online:
1. Install Firebase tools (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```
2. Login to Firebase:
   ```bash
   firebase login
   ```
3. Deploy:
   ```bash
   firebase deploy
   ```
