const tarefasIniciais = [
  { id: 1, texto: "Estudar JavaScript", concluida: false },
  { id: 2, texto: "Fazer exercícios", concluida: false },
];

const novasTarefasIniciais = [
  ...tarefasIniciais,
  { id: 3, texto: "almoçar", concluida: false },
];

const novasTarefasInciaisComTrue = novasTarefasIniciais.map((tarefa) => {
  return tarefa.id === 2 ? { ...tarefa, concluida: true } : tarefa;
});

const novasTarefaTrue = novasTarefasIniciais.find((tarefa) => tarefa.id == 1);
//novasTarefaTrue.concluida = true;

console.log(tarefasIniciais);
console.log(novasTarefasIniciais);
console.log(novasTarefaTrue);
console.log(novasTarefasInciaisComTrue);

const tarefasCombinadas = [...tarefasIniciais, ...novasTarefasIniciais];

console.log(tarefasCombinadas);

const listaSemUmaTarefa = novasTarefasInciaisComTrue.filter((tarefa) => {
  return tarefa.id != 1;
});

console.log("lista sem um elemento:");
console.log(listaSemUmaTarefa);

// Tarefas:
// 1. Adicione uma nova tarefa sem modificar o array original
// 2. Marque uma tarefa como concluída mantendo imutabilidade
// 3. Combine duas listas de tarefas diferentes
// 4. Remova uma tarefa específica mantendo imutabilidade
