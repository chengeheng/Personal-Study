const { app, BrowserWindow } = require("electron");
const path = require("path");

/**
 * 01 创建一个窗口
 * 02 让窗口加载了一个界面，这个界面就是用web技术实现，并运行在渲染进程中的
 */
const createWindow = () => {
  const mainWin = new BrowserWindow({
    x: 100, // 窗口显示的位置，相对屏幕左上角的横坐标
    y: 100, // 窗口显示的位置，相对屏幕左上角的纵坐标
    show: false, // 默认情况下创建一个窗口对象后就会显示，设置为false就不会显示了
    width: 800,
    height: 600,
    maxWidth: 1000, // 窗口最大宽度
    maxHeight: 800, // 窗口最大高度
    minWidth: 400, // 窗口最小宽度
    minHeight: 400, // 窗口最小高度
    resizable: false, // 控制窗口大小是否可修改，即是否可缩放
    // webPreferences: {}
  });

  mainWin.loadFile("index.html");

  mainWin.on("ready-to-show", () => {
    mainWin.show();
  });

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
