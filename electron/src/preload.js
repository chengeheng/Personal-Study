const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  setTitle: (title) => ipcRenderer.send("set-title", title),
  openFile: () => ipcRenderer.invoke("dialog:openFile"), // 使用invoke将获得promise作为返回值
  handleCounter: (callback) => ipcRenderer.on("update-counter", callback), // 主进程向渲染进程发消息
});
