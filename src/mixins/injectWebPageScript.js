const { ipcRenderer } = require("electron");

// Once the Webview's document has been loaded, notify the ipcRenderer
document.addEventListener("DOMContentLoaded", () => {
  ipcRenderer.on("requestData", () => {
    ipcRenderer.sendToHost("replyData", {
      title: document.title,
      url: window.location.href
    });
  });
});