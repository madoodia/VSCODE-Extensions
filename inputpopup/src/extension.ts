import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.createClassFiles', async () => {
    const className = await vscode.window.showInputBox({ prompt: 'Enter class name' });
    if (!className) return;

    const folderPath = vscode.workspace.workspaceFolders?.[0].uri.fsPath || 'D:\\madoodia\\dev\\vscode-InputPopUp-Extension\\inputpopup\\Result';
	// print the folderPath to the console
	console.log(folderPath);
    const headerPath = path.join(folderPath, `${className}.h`);
	console.log(headerPath);
    const sourcePath = path.join(folderPath, `${className}.cpp`);
	console.log(sourcePath);

    fs.writeFileSync(headerPath, `// Header for ${className}\n`);
    fs.writeFileSync(sourcePath, `// Source for ${className}\n`);

    vscode.window.showInformationMessage(`Files ${className}.h and ${className}.cpp created.`);
  });

  context.subscriptions.push(disposable);
}


// This method is called when your extension is deactivated
export function deactivate() {}
