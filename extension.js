const vscode = require('vscode');

function activate(context) {
  let disposable = vscode.commands.registerCommand('urlDecoder.decode', function () {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No editor is active');
      return;
    }

    const selection = editor.selection;
    const text = editor.document.getText(selection);

    let decoded;

    try {
      // Try decoding the full selection first
      decoded = decodeURIComponent(text);
    } catch {
      // Fallback: try decoding line by line
      decoded = text
        .split(/\r?\n/)
        .map(line => {
          try {
            return decodeURIComponent(line);
          } catch {
            return line; // Keep original if decoding fails
          }
        })
        .join('\n');
    }

    editor.edit(editBuilder => {
      editBuilder.replace(selection, decoded);
    });

    vscode.window.showInformationMessage('Decoded selected text!');
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};