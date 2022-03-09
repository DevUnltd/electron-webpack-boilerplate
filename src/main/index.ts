// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
import { initialize, enable } from "@electron/remote/main";

const isDevelopment = process.env.NODE_ENV !== 'production';
const isPackaged = app.isPackaged;

initialize();

function createWindow () {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 500,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    enable(mainWindow.webContents);

    if(isDevelopment){
        // load the index.html of the app.
        mainWindow.loadURL('http://localhost:9000');

        // Open the DevTools.
        mainWindow.webContents.openDevTools()
    } else {
        // load the index.html of the app.
        const indexPrefix = isPackaged ? 'build/' : '';
        mainWindow.loadFile(indexPrefix + "index.html");
    }

    /**
     * Test method for demo purposes
     */
    (global as any).test = (options: any) => {
        return "called"
    };
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.