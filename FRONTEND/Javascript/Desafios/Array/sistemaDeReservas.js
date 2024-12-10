const reservasAtuais = [
  { id: 1, sala: "A1", horario: "09:00" },
  { id: 2, sala: "B1", horario: "10:00" },
  { id: 3, sala: "A1", horario: "10:00" },
  { id: 4, sala: "B1", horario: "20:00" },
];

// Tarefas:
// 1. Adicione uma nova reserva
// 2. Atualize o horário de uma reserva existente
// 3. Combine reservas de duas salas diferentes
// 4. Crie uma função que aceite múltiplas reservas como argumentos

const reservasAtuaisMaisUm = [
  ...reservasAtuais,
  { id: 5, sala: "C1", horario: "12:00" },
];

console.log(reservasAtuaisMaisUm);

const reservasComHorarioAlterado = reservasAtuaisMaisUm.map((reserva) => {
  return reserva.id == 3 ? { ...reserva, horario: "14:00" } : reserva;
});

const reservasSalaA = reservasAtuais.filter((reserva) => {
  if (reserva.sala.startsWith("A")) {
    return reserva;
  }
});

const reservasSalaB = reservasComHorarioAlterado.filter((reserva) => {
  if (reserva.sala.startsWith("B")) {
    return reserva;
  }
});

const reservasSalaBComSalaA = [...reservasSalaA, ...reservasSalaB];

console.log(reservasComHorarioAlterado);

console.log(reservasSalaA);

console.log("sala A e B");

console.log(reservasSalaBComSalaA);

// 4. Crie uma função que aceite múltiplas reservas como argumentos

function criaReservas() {}
