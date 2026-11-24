const express = require("express");
const jwt = require("jsonwebtoken");
const { users } = require("../db");
const { JWT_SECRET } = require("../middleware/auth");

const router = express.Router();

// DEMO ONLY: plain-text passwords and no rate limiting are intentional weaknesses.
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((item) => item.email === email && item.password === password);

  if (!user) return res.status(401).json({ error: "Invalid email or password" });

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role }
  });
});

module.exports = router;
