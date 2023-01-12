import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://plantaostiadmin:bZTqvHoasw5WndlI@lopscorp.hsvvq.mongodb.net/test?retryWrites=true"
  )
  .then((db) => console.log("Db is conected"))
  .catch((err) => console.log(err));
