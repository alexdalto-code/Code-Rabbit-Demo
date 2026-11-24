const express = require("express");
const { tasks } = require("../db");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.get("/", requireAuth, (req, res) => {
  res.json(tasks.filter((task) => task.userId === req.user.id));
});

// INTENTIONAL DEMO WEAKNESS: checks login but not task ownership (IDOR).
router.get("/:id", requireAuth, (req, res) => {
  const task = tasks.find((item) => item.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

router.post("/", requireAuth, (req, res) => {
  const task = {
    id: Date.now(),
    userId: req.user.id,
    title: String(req.body.title || ""),
    completed: false
  };
  tasks.push(task);
  res.status(201).json(task);
});

module.exports = router;
