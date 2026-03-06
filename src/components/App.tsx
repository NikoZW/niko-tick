import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";
import type { Todo } from "../types/types";

const initialTodos = [
  { id: 1, text: "study exam", isCompleted: false },
  { id: 2, text: "walk the dog", isCompleted: true },
  { id: 3, text: "buy groceries", isCompleted: false },
];

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  //handle event functions
  const handleClick = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return { ...t, isCompleted: !t.isCompleted };
        } else {
          return t;
        }
      }),
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAdd = (text: string) => {
    setTodos((prev) => [
      ...prev,
      { id: prev[prev.length - 1].id + 1, text, isCompleted: false },
    ]);
  };

  //helper functions

  const completedCount = todos.filter((t) => t.isCompleted === true).length;

  return (
    <div className="flex justify-center items-center font-roboto bg-[#f1d4b3] min-h-screen flex-col ">
      <BackgroundHeading />

      <main className="relative w-243 h-159 bg-white rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header todos={todos} completedCount={completedCount} />

        <TodoList
          todos={todos}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />

        <Sidebar handleAdd={handleAdd} />
      </main>
      <Footer />
    </div>
  );
}
