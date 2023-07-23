# Electron

## 组成部分

1. Chromium: 支持最新特性的浏览器
2. Node.js: javascript 运行时，可实现文件读写等
3. Native apis: 提供统一的原生界面能力

## 主要流程

- 启动 APP
- 主进程创建 window
- Win 加载界面
- 用户交互 -> IPC 与主进程交互
- Native apis

## 主进程

- 可以看做是 package.json 中 main 属性对应的文件
- 一个应用只会有一个主进程
- 只有主进程可以进行 GUI 的 API 操作

## 渲染进程

- Windows 中展示的界面通过渲染进程表现
- 一个应用可以有多个渲染进程
- 渲染进程必须通过主进程通信才能调用 GUI 的 API
