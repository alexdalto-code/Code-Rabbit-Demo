// DEMO ONLY: in-memory database. Data resets whenever the server restarts.
const users = [
  { id: 1, name: "Ana Admin", email: "admin@taskflow.test", password: "admin123", role: "admin" },
  { id: 2, name: "Bruno User", email: "bruno@taskflow.test", password: "user123", role: "user" },
  { id: 3, name: "Carla User", email: "carla@taskflow.test", password: "user123", role: "user" }
];

const tasks = [
  { id: 101, userId: 2, title: "Preparar presentación", completed: false },
  { id: 102, userId: 3, title: "Revisar presupuesto", completed: false }
];

module.exports = { users, tasks };
