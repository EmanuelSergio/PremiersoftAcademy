import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

// GET: Busca todas as tarefas
export async function GET() {
  const todos = await prisma.todo.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(todos);
}

// POST: Cria uma nova tarefa
export async function POST(request: Request) {
  const json = await request.json();
  const todo = await prisma.todo.create({
    data: {
      title: json.title,
    },
  });
  return NextResponse.json(todo);
}

export async function DELETE(request: Request) {
  const json = await request.json();
  const todo = await prisma.todo.delete({
    where: { id: Number(json.id) },
  });
  return NextResponse.json(todo);
}

export async function UPDATE(request: Request) {
  const json = await request.json();

  const { id, data } = json;

  const todoUpdate = await prisma.todo.update({
    where: { id: Number(id) },
    data: data,
  });
  return NextResponse.json(todoUpdate);
}
