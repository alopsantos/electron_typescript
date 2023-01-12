import { app, ipcMain, BrowserWindow } from "electron";
import electronReload from "electron-reload";
import path from "path";
import { taskModel } from "./modules/tasks/Task";

let mainWindow: BrowserWindow;

app.whenReady().then(createWindow);

try {
  electronReload(__dirname, {});
} catch (__) {}

function createWindow(): void {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 500,
    icon: path.join(__dirname, "assets", "icon.png"),
    webPreferences: {
      preload: __dirname + "/preload.js",
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
    },
    frame: false,
    show: false,
  });

  mainWindow.loadFile("./index.html");
  mainWindow.on("ready-to-show", () => mainWindow.show());
}
// app.on("ready", createWindow);

ipcMain.on("get-tasks", async (e, args) => {
  const tasks = await taskModel.find();
  console.log(tasks);
  e.reply("get-tasks", JSON.stringify(tasks));
});
