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

  mainWin.webContents.on("did-finish-load", () => {
    console.log("03 -> did finish load");
  });

  mainWin.webContents.on("dom-ready", () => {
    console.log("02 -> dom ready");
  });

  mainWin.on("close", () => {
    console.log("04 -> main window closed");
    mainWin = null; // 清空引用关系
  });
};

/**
 * 当app启动之后执行窗口创建等操作
 */
app.whenReady().then(() => {
  console.log("01 -> app ready");
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  console.log("05 -> all window closed");
  if (process.platform !== "darwin") app.quit();
});
app.on("before-quit", () => {
  console.log("06 -> before quit");
});
app.on("will-quit", () => {
  console.log("07 -> will quit");
});
app.on("quit", () => {
  console.log("08 -> quit");
});
