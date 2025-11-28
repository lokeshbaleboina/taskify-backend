require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const taskRoutes = require("./routes/tasks");

const app = express();

app.use(cors());
app.use(express.json());

// DB Connect
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Task Service DB connected"))
  .catch(err => console.log(err));

app.get("/ping", (req, res) => {
  res.json({ message: "Task Service is alive!" });
});

app.use("/", taskRoutes);

app.listen(process.env.PORT, () => {
  console.log("Task Service running on port", process.env.PORT);
});

