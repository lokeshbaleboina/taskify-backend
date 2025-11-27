const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
  res.json({ message: "Task Service is alive!" });
});

app.listen(5002, () => {
  console.log("Task Service running on port 5002");
});
