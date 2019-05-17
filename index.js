const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;

var { ipcMain } = require('electron');


function createWindow() {
  // win = new BrowserWindow({ width: 800, height: 600, resizable: false });

  // // load the dist folder from Angular
  // win.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, 'dist/index.html'),
  //     protocol: "file:",
  //     slashes: true,
  //     hash: 'make-discussion'
  //   })
  // );
  // win.loadURL(`file://${__dirname}/dist/index.html#/make-discussion`)
  // win.loadURL('/dist/index.html/make-discussion')

  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()

  // win.on("closed", () => {
  //   win = null;
  // });

  // var dataObject;
  // ipcMain.on('showDiscussion', (event, data) => {

  // });
  
  // ipcMain.on('getData', (event) => {
  //   event.sender.send('getData', dataObject)
  // })
  
  win2 = new BrowserWindow({ width: 1000, height: 1000, show: false, fullscreen: true });
  win2.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: "file:",
      slashes: true,
    })
  );
  // win2.loadURL('http://localhost:4200')
  win2.openDevTools();
  win2.show();

  ipcMain.on('exit', () => {
    win2.close();
  })
}

app.on("ready", createWindow);

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// initialize the app's main window
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});