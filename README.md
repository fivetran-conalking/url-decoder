# URL Decoder

A simple VS Code extension that decodes URL-encoded text (like `%20` → space) directly in the editor.

## ✨ Features

- Decode URL-encoded strings in-place
- Works with selected text in any file
- Quickly accessible via the Command Palette

## 🛠 How to Use

1. Highlight any URL-encoded text (e.g. `Hello%20World%21`)
2. Open the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
3. Run: **"Decode URL Encoding"**
4. The selected text will be replaced with its decoded version (e.g. `Hello World!`)

## 📦 Installation

### Option 1: From VSIX

1. Download or build `url-decoder-0.0.1.vsix`
2. In VS Code, press `Cmd+Shift+P` and run: `Extensions: Install from VSIX...`
3. Select the `.vsix` file
4. Done!

### Option 2: Manual Build

```bash
git clone https://github.com/your-name/url-decoder.git
cd url-decoder
npm install
vsce package
code --install-extension url-decoder-0.0.1.vsix