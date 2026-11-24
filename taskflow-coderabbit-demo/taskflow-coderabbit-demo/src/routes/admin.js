const express = require("express");
const { users } = require("../db");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

// INTENTIONAL DEMO WEAKNESS: authentication is checked, admin role is not.
router.get("/users", requireAuth, (_req, res) => {
  res.json(users.map(({ id, name, email, role }) => ({ id, name, email, role })));
});

module.exports = router;
