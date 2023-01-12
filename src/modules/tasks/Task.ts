import { model, Schema } from "mongoose";

const newTaskSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const taskModel = model("Task", newTaskSchema);

export { taskModel };
