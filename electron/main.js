const { app, BrowserWindow } = require("electron");
const path = require("path");

/**
 * 01 创建一个窗口
 * 02 让窗口加载了一个界面，这个界面就是用web技术实现，并运行在渲染进程中的
 */
const createWindow = () => {
  const mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {}
  });

  mainWin.loadFile("index.html");

  mainWin.on("close", () => {
    console.log("main window closed~~~");
  });
};

/**
 * 当app启动之后执行窗口创建等操作
 */
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  console.log("all window closed");
  if (process.platform !== "darwin") app.quit();
});
