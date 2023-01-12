import { ipcRenderer } from "electron";
const taskList = <HTMLElement>document.querySelector("#taskList");

interface ITasks {
  tasks: Array<ITask>;
}

interface ITask {
  id?: string;
  name: string;
  description: string;
}

let tasks: ITasks;

function renderTasks(tasks: ITasks) {
  taskList.innerHTML = "";
  tasks.tasks.map((task: ITask) => {
    taskList.innerHTML = `
      <li class="card" key=${task.id}>
        <h4>${task.id}</h4>
        <h4>${task.name}</h4>
        <h4>${task.description}</h4>
      </li>
    `;
  });
}

ipcRenderer.send("get-tasks");

ipcRenderer.on("get-tasks", (e, args) => {
  const recievedTasks = JSON.parse(args);
  tasks = recievedTasks;
  renderTasks(tasks);
});
