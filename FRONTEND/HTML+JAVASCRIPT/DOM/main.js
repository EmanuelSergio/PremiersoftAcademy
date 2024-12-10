const btn = document.getElementById("myButton");

btn.click = function () {
  alert("apertado");
};

btn.addEventListener("click", function (event) {
  console.log("apertou", event);
});

const mouseArea = document.getElementById("mouse-events");
const log = document.getElementById("log");

function logEvent(eventName) {
  log.innerHTML = `Último evento: ${eventName} - ${new Date().toLocaleTimeString()}`;
}

// Registrando diferentes eventos de mouse
mouseArea.addEventListener("click", () => logEvent("click"));
mouseArea.addEventListener("dblclick", () => logEvent("dblclick"));
mouseArea.addEventListener("mouseenter", () => logEvent("mouseenter"));
mouseArea.addEventListener("mouseleave", () => logEvent("mouseleave"));
mouseArea.addEventListener("mousemove", () => logEvent("mousemove"));
mouseArea.addEventListener("mousedown", () => logEvent("mousedown"));
mouseArea.addEventListener("mouseup", () => logEvent("mouseup"));

const keyboard = document.getElementById("keyboard-input");
const keyLog = document.getElementById("key-log");

keyboard.addEventListener("keydown", (event) => {
  keyLog.innerHTML = `Tecla: ${event.key} <br>
  Codigo: ${event.code}`;
});

const form = document.getElementById("user-form");
const formLog = document.getElementById("form-log");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

function logFormEvent(event, message) {
  const time = new Date().toLocaleTimeString();
  formLog.innerHTML += `<div>${time} : ${event} - ${message} </div>`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  logFormEvent("submit", "Formulario enviado");
});

form.addEventListener("reset", (e) => {
  e.preventDefault();
  logFormEvent("reset", "formulario limpo");
});

// Eventos dos campos
nameInput.addEventListener("focus", () => {
  logFormEvent("focus", "Campo nome focado");
});

nameInput.addEventListener("blur", () => {
  logFormEvent("blur", "Campo nome perdeu foco");
});

emailInput.addEventListener("change", (e) => {
  logFormEvent("change", `Email alterado para: ${e.target.value}`);
});

ageInput.addEventListener("input", (e) => {
  const age = e.target.value;
  if (age < 0 || age > 150) {
    ageInput.setCustomValidity("Idade deve estar entre 0 e 150 seu bosta");
  } else {
    ageInput.setCustomValidity("");
  }
});

const scrollIndicator = document.getElementById("scroll-indicator");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregada");
});

window.addEventListener("load", () => {
  console.log("pagina carregada");
});

// Monitorando scroll
window.addEventListener("scroll", () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const currentScroll = window.scrollY;
  const scrollPercentage = ((currentScroll / maxScroll) * 100).toFixed(0);
  scrollIndicator.textContent = `Scroll: ${scrollPercentage}%`;
});

// Podemos adicionar múltiplos handlers
btn.addEventListener("click", function (event) {
  console.log("Primeiro handler:", event);
});

btn.addEventListener("click", function (event) {
  console.log("Segundo handler:", event);
});

// Podemos remover handlers quando necessário
function temporaryHandler() {
  console.log("Este handler será removido em 5 segundos");
}

btn.addEventListener("click", temporaryHandler);

setTimeout(() => {
  btn.removeEventListener("click", temporaryHandler);
  console.log("Handler removido!");
}, 5000);

//const log = document.getElementById("log");

function logEvent(elemento, fase) {
  log.innerHTML += `<div>Elemento: ${elemento} - Fase: ${fase}</div>`;
}

// Demonstração de Bubbling (terceiro parâmetro false ou omitido)
document.getElementById("filho").addEventListener("click", function () {
  logEvent("Filho", "Bubbling");
});

document.getElementById("pai").addEventListener("click", function () {
  logEvent("Pai", "Bubbling");
});

document.getElementById("avo").addEventListener("click", function () {
  logEvent("Avô", "Bubbling");
});

// Demonstração de Capturing (terceiro parâmetro true)
document.getElementById("avo").addEventListener(
  "click",
  function () {
    logEvent("Avô", "Capturing");
  },
  true
);

document.getElementById("pai").addEventListener(
  "click",
  function () {
    logEvent("Pai", "Capturing");
  },
  true
);

document.getElementById("filho").addEventListener(
  "click",
  function () {
    logEvent("Filho", "Capturing");
  },
  true
);

const todoApp = document.getElementById("todo-app");
const newTask = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Adicionar tarefa
document.getElementById("add-task").addEventListener("click", function () {
  if (newTask.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
        ${newTask.value}
        <button class="delete">X</button>
        <button class="edit">✎</button>
    `;
  taskList.appendChild(li);
  newTask.value = "";
});

// Event delegation para toda a lista
taskList.addEventListener("click", function (e) {
  const target = e.target;

  // Clique no item da lista
  if (target.tagName === "LI") {
    target.classList.toggle("completed");
  }
  // Clique no botão deletar
  else if (target.classList.contains("delete")) {
    target.parentElement.remove();
  }
  // Clique no botão editar
  else if (target.classList.contains("edit")) {
    const li = target.parentElement;
    const currentText = li.firstChild.textContent.trim();
    const newText = prompt("Editar tarefa:", currentText);

    if (newText !== null && newText.trim() !== "") {
      li.firstChild.textContent = newText;
    }
  }
});

// Demonstração de por que event delegation é melhor
console.log(
  "Número de event listeners sem delegation:",
  document.querySelectorAll("li").length
);
console.log("Número de event listeners com delegation: 1");

const listaCamisas = document.getElementById("camisas");

const drop = document.getElementById("dropdown-menu");

listaCamisas.addEventListener("mouseenter", () => {
  drop.style.display = "block";
});

listaCamisas.addEventListener("mouseleave", () => {
  drop.style.display = "none";
});
