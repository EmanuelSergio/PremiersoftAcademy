"use client";

import { useState, useEffect } from "react";
import { DELETE } from "./api/todos/route";
import { title } from "process";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleUpdate = async () => {
    if (!editingTodo) {
      return;
    }

    await fetch("/api/todos", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: editingTodo.id,
        data: { title: editingTodo.title },
      }),
    });

    setEditingTodo(null);
    fetchTodos();
  };

  const handleDelete = async (id: number) => {
    await fetch("/api/todos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  };

  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTodo }),
    });

    setNewTodo("");
    fetchTodos();
  };

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>

      <form onSubmit={addTodo} className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-2 rounded mr-2"
          placeholder="Nova tarefa..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Adicionar
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-2 bg-gray-100 rounded flex justify-between items-center"
          >
            <span>{todo.title}</span>
            <div className="flex gap-4">
              {" "}
              <button onClick={() => handleDelete(todo.id)}>Excluir</button>
              <button>Editar</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
