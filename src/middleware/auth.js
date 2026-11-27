const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;
if (!secret || secret.length !== 64 || /[^a-f0-9]/i.test(secret)) {
  throw new Error("JWT_SECRET must contain 32 random bytes encoded as 64 hexadecimal characters");
}
const JWT_SECRET = Buffer.from(secret, "hex");

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
