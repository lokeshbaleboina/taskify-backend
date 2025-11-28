const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// Create Task
router.post("/tasks", auth, async (req, res) => {
  try {
    const task = await Task.create({
      userId: req.userId,
      title: req.body.title
    });

    res.json(task);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Tasks for user
router.get("/tasks", auth, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
