const express = require("express");

const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const app = express();
const notFound = require("./middleware/not-found");
require("dotenv").config();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("server is listening on port", port));
  } catch (error) {
    console.log(error);
  }
};

start();
