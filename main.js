const { app, BrowserWindow, Menu } = require('electron'); // Module to control application life.
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

let storage = require("./storage");

function createWindow () {

	// Load the last state of the window from a previous run
	const lastWindowState = storage.get("lastWindowState");
	if (lastWindowState === null) {
		lastWindowState = {
			width: 400,
			height: 780,
		}
	}

	// Definition of the main window object
	mainWindow = new BrowserWindow({
		x: lastWindowState.x,
		y: lastWindowState.y,
		width: lastWindowState.width,
		height: lastWindowState.height,
		frame: false,
		resizable: false,

		// Config for a secure communication between main process and the renderer as explained here :
		// https://github.com/electron/electron/issues/9920#issuecomment-575839738
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			enableRemoteModule: false,
			preload: path.join(__dirname, "preload.js")
		}
	});

	// Open main window with interface from  `index.html`
	mainWindow.loadFile(path.join(__dirname, 'index.html'))
	mainWindow.webContents.openDevTools({ mode: 'detach' }) // debug

	// Save current state of the window when closing
	mainWindow.on('close', function() {
		var bounds = mainWindow.getBounds();
		storage.set("lastWindowState", {
			x: bounds.x,
			y: bounds.y,
			width: bounds.width,
			height: bounds.height
		});
	});

	// Garbage collection
	mainWindow.on('closed', () => {
		mainWindow = null;
	});

	// require('./menu');
};

app.whenReady().then(() => createWindow())
