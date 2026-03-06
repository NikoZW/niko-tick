import DeleteButton from "./DeleteButton";
import { useState } from "react";
import type { Todo } from "../types";

const initialTodos = [
  { id: 1, text: "study exam", isCompleted: false },
  { id: 2, text: "walk the dog", isCompleted: true },
  { id: 3, text: "buy groceries", isCompleted: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-12.5 text-14px cursor-pointer border-b border-black/8"
          onClick={() => {
            setTodos((prev) =>
              prev.map((t) => {
                if (t.id === todo.id) {
                  return { ...t, isCompleted: !t.isCompleted };
                } else {
                  return t;
                }
              }),
            );
          }}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {" "}
            {todo.text}{" "}
          </span>
          <DeleteButton id={todo.id} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
