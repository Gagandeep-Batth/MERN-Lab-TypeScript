"use client";
import { useEffect, useState } from "react";
import { fetchTodos, createTodo } from "../lib/api";
interface Todo {
  _id: string;
  title: string;

  completed: boolean;
}
export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = await createTodo(title);
    setTodos([...todos, newTodo]);
    setTitle("");
  };
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
    </main>
  );
}
