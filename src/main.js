import App from './App.svelte';
import { appWindow } from '@tauri-apps/api/window';
import { globalShortcut } from '@tauri-apps/api';


appWindow.setAlwaysOnTop(true);



const app = new App({
	target: document.body
});

export default app;


globalShortcut.register("Ctrl+Shift+0",(shortcut) => app.clickNumCopy(0));
globalShortcut.register("Ctrl+Shift+1",(shortcut) => app.clickNumCopy(1));
globalShortcut.register("Ctrl+Shift+2",(shortcut) => app.clickNumCopy(2));
globalShortcut.register("Ctrl+Shift+R",(shortcut) => app.resetGame());

appWindow.setFocus();