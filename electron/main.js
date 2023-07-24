const { app, BrowserWindow, Menu, ipcMain, dialog } = require("electron");
const path = require("path");

const handleFileOpen = async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog();
  if (!canceled) {
    return filePaths[0];
  }
};

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
    // resizable: false, // 控制窗口大小是否可修改，即是否可缩放
    title: "Electron Title", // 需要html中不设置head的title标签值
    frame: true, // 用于自定义menu，只保留主体内容，无法拖动, 默认为true
    // transparent: true, // 创建透明窗体，窗体依旧可点击
    autoHideMenuBar: true, // window下菜单栏的隐藏
    icon: "logo.ico", // 设置一个图片路径，可以自定义当前应用的显示图标
    webPreferences: {
      // nodeIntegration: true, // 允许渲染进程中使用node环境
      // contextIsolation: false, // 配合nodeIntegration一起使用
      preload: path.join(__dirname, "src/preload.js"), // 预加载脚本
    },
  });

  // 定义自己需要的菜单项
  const menuTemp = [
    {
      label: "文件",
      submenu: [
        { label: "打开文件" },
        { type: "separator" },
        { label: "关闭文件夹" },
        { label: "关于", role: "about" },
      ],
    },
    {
      label: "角色",
      submenu: [
        { label: "复制", role: "copy" },
        { label: "剪切", role: "cut" },
        { label: "粘贴", role: "paste" },
        { label: "最小化", role: "minimize" },
      ],
    },
    {
      label: "类型",
      submenu: [
        { label: "选项1", type: "checkbox" },
        { label: "选项2", type: "checkbox" },
        { label: "选项3", type: "checkbox" },
        { type: "separator" },
        { label: "item1", type: "radio" },
        { label: "item2", type: "radio" },
        { label: "item3", type: "radio" },
        { label: "windows", type: "submenu", role: "windowMenu" },
      ],
    },
    {
      label: "其他",
      submenu: [
        {
          label: "打开",
          // icon: "./logo.ico",
          accelerator: "ctrl+o",
          click: () => {
            console.log("open操作执行了");
          },
        },
        {
          label: "重新加载",
          accelerator: "cmd + r",
          click: () => {
            mainWin.webContents.reload();
          },
        },
        {
          label: "打开devtool",
          accelerator: "option + cmd + i",
          click: () => {
            if (mainWin.webContents.isDevToolsOpened()) {
              mainWin.webContents.closeDevTools();
            } else {
              mainWin.webContents.openDevTools();
            }
          },
        },
      ],
    },
    {
      label: app.name,
      submenu: [
        {
          label: "增加",
          click: () => {
            mainWin.webContents.send("update-counter", 1);
          },
        },
        {
          label: "减少",
          click: () => {
            mainWin.webContents.send("update-counter", -1);
          },
        },
      ],
    },
  ];
  // mac系统中菜单的第一项必须是应用的名称
  if (process.platform === "darwin") {
    menuTemp.unshift({
      label: app.getName(),
      submenu: [
        {
          label: "Quit",
          accelerator: "CmdOrCtrl+Q",
          click() {
            app.quit();
          },
        },
      ],
    });
  }
  // 利用上述模版生成一个菜单
  const menu = Menu.buildFromTemplate(menuTemp);
  // 将上述的自定义菜单添加到应用里
  Menu.setApplicationMenu(menu);

  ipcMain.on("set-title", (e, title) => {
    const webContents = e.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win.setTitle(title);
  });

  mainWin.loadFile("./public/index.html");

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
  ipcMain.handle("dialog:openFile", handleFileOpen);
  ipcMain.on("counter-value", (e, value) => {
    console.log(value);
  });
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
