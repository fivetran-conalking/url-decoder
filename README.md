# URL Decoder

A simple VS Code extension that decodes URL-encoded text (like `%20` → space) directly in the editor.

## ✨ Features

- Decode URL-encoded strings in-place
- Works with selected text in any file
- Gracefully handles multi-line or partially encoded text
- Quickly accessible via the Command Palette

## 🛠 How to Use

1. Highlight any URL-encoded text (e.g. `Hello%20World%21`)
2. Open the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
3. Run: **"Decode URL Encoding"**
4. The selected text will be replaced with its decoded version (e.g. `Hello World!`)

---

## 🧩 Install the Extension

### Option 1: Download Prebuilt `.vsix`

1. Go to the [Releases page](https://github.com/fivetran-conalking/url-decoder/releases/tag/v1.0.1)
2. Download: `url-decoder-1.0.1.vsix`
3. In VS Code:
   - Press `Cmd+Shift+P`
   - Run: `Extensions: Install from VSIX...`
   - Select the downloaded file
4. ✅ You're done!

### Option 2: Build from Source

```bash
git clone https://github.com/fivetran-conalking/url-decoder.git
cd url-decoder
npm install
vsce package
code --install-extension url-decoder-1.0.1.vsix
