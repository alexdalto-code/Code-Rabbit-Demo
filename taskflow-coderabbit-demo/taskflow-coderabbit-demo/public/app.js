let token = "";

async function api(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    }
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Request failed");
  return data;
}

document.getElementById("login").addEventListener("click", async () => {
  const message = document.getElementById("message");
  try {
    const result = await api("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      })
    });
    token = result.token;
    document.getElementById("workspace").classList.remove("hidden");
    document.getElementById("welcome").textContent = `Hola, ${result.user.name}`;
    message.textContent = "";
    await loadTasks();
  } catch (error) {
    message.textContent = error.message;
  }
});

async function loadTasks() {
  const tasks = await api("/api/tasks");
  const list = document.getElementById("tasks");
  list.innerHTML = "";
  tasks.forEach((task) => {
    const item = document.createElement("li");
    // INTENTIONAL DEMO WEAKNESS: untrusted task title is rendered as HTML (XSS).
    item.innerHTML = task.title;
    list.appendChild(item);
  });
}

document.getElementById("add").addEventListener("click", async () => {
  const input = document.getElementById("newTask");
  await api("/api/tasks", { method: "POST", body: JSON.stringify({ title: input.value }) });
  input.value = "";
  await loadTasks();
});

document.getElementById("loadUsers").addEventListener("click", async () => {
  const users = await api("/api/admin/users");
  const output = document.getElementById("users");
  output.textContent = JSON.stringify(users, null, 2);
  output.classList.toggle("hidden");
});

document.getElementById("logout").addEventListener("click", () => {
  token = "";
  document.getElementById("workspace").classList.add("hidden");
});
