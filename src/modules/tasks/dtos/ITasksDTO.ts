interface ITasks {
  tasks: Array<ITask>;
}

interface ITask {
  id: string;
  name: string;
  description: string;
}

export { ITasks, ITask };
