// const { BrowserWindow } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  // 点击按钮打开一个新窗口
  //   const oBtn = document.getElementById("btn");
  //   oBtn.addEventListener("click", () => {
  //     // 创建窗口
  //     const indexWin = new BrowserWindow({
  //       width: 400,
  //       height: 300,
  //       title: "新窗口",
  //     });
  //     indexWin.loadFile("item.html");
  //   });
});
const btn1 = document.getElementById("btn1");
const titleInput1 = document.getElementById("title1");

btn1.addEventListener("click", () => {
  const title = titleInput1.value;
  console.log(title, window.electronAPI);
  window.electronAPI.setTitle(title);
});

const filePathElement = document.getElementById("filePath");
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", async () => {
  const filePath = await window.electronAPI.openFile();
  filePathElement.value = filePath;
});

const counter = document.getElementById("counter");
window.electronAPI.handleCounter((e, v) => {
  const oldValue = Number(counter.value);
  const newValue = oldValue + v;
  counter.value = newValue;
  e.sender.send("counter-value", newValue);
});
