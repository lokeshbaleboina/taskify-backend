require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

// CONNECT MONGO
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("User Service DB connected"))
  .catch(err => console.log(err));

// ROUTES
app.use("/", authRoutes);

// PING
app.get("/ping", (req, res) => {
  res.json({ message: "User Service is alive!" });
});

app.listen(process.env.PORT, () => {
  console.log("User Service running on port", process.env.PORT);
});
