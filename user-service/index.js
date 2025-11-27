const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
  res.json({ message: "User Service is alive!" });
});

app.listen(5001, () => {
  console.log("User Service running on port 5001");
});
