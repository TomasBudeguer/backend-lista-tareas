import mongoose from "mongoose";

// const url = "mongodb://localhost:27017/lista-tareas"; //BD-LOCAL
const url = "mongodb+srv://TomasBudeguer:KJI5kQLnLz619pLl@cluster0.vjacqdu.mongodb.net/lista-tareas";

mongoose.connect(url);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("BD conectada");
});
