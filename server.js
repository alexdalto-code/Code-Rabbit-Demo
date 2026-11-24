const express = require("express");
const path = require("path");
const authRoutes = require("./src/routes/auth");
const taskRoutes = require("./src/routes/tasks");
const adminRoutes = require("./src/routes/admin");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "TaskFlow demo API" });
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`TaskFlow demo running at http://localhost:${PORT}`);
});
