const jwt = require("jsonwebtoken");

// INTENTIONAL DEMO WEAKNESS: hard-coded secret. Never do this in production.
const JWT_SECRET = "taskflow-demo-secret-do-not-use";

function requireAuth(req, res, next) {
  const token = (req.headers.authorization || "").replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Missing token" });

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (_error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = { requireAuth, JWT_SECRET };
