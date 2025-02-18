const supabaseClient = window.supabase.createClient(
  "https://vowmahypfhlzronelhky.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvd21haHlwZmhsenJvbmVsaGt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwOTEwNTMsImV4cCI6MjA0NjY2NzA1M30.0hfSR0FtTZkbrB36WxXYCVqT05WpBQFQFKAQaVa304o"
);

async function loadTasks() {
  try {
    const { data, error } = await supabaseClient
      .from("tasks")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    data.forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.className = "task-item";
      console.log(task.id);
      taskElement.innerHTML = `
                        <li class="list-group-item d-flex justify-content-between">
                          <span>${task.title} - ${task.data}</span>
                          <div>
                            <button class="btn btn-danger" onclick="deleteTask(${task.id})">Deletar</button>
                            <button class="btn btn-info" onclick="updateTask(${task.id})">Atualizar</button>
                          </div>
                        </li>
                        `;
      taskList.appendChild(taskElement);
    });
  } catch (error) {
    console.error("Erro ao carregar tarefas:", error);
  }
}

async function addTask() {
  const taskInput = document.getElementById("taskInput");
  const data = document.getElementById("dateTaskInput").value;
  const title = taskInput.value.trim();

  if (!title && !data) return;

  try {
    const { error } = await supabaseClient
      .from("tasks")
      .insert([{ title, data }]);

    if (error) throw error;

    taskInput.value = "";
    loadTasks();
  } catch (error) {
    console.error("Erro ao adicionar tarefa:", error);
  }
}

async function deleteTask(id) {
  try {
    const { error } = await supabaseClient.from("tasks").delete().eq("id", id);

    if (error) throw error;

    loadTasks();
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
  }
}

// Carrega tarefas ao iniciar
loadTasks();
