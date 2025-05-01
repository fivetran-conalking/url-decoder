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

    try {
      const decoded = decodeURIComponent(text);
      editor.edit(editBuilder => {
        editBuilder.replace(selection, decoded);
      });
      vscode.window.showInformationMessage('Decoded!');
    } catch (e) {
      vscode.window.showErrorMessage('Invalid encoded text');
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};