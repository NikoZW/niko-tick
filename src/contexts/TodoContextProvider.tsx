import { createContext, useEffect, useState } from "react";
import type {
  Todo,
  TodoContextProviderProbs,
  TTodosContext,
} from "../libs/types";

export const TodosContext = createContext<TTodosContext | null>(null);

//helper functions
const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
};
export default function TodoContextProvider({
  children,
}: TodoContextProviderProbs) {
  //sample data
  const initialTodos = [
    { id: 1, text: "study exam", isCompleted: false },
    { id: 2, text: "walk the dog", isCompleted: true },
    { id: 3, text: "buy groceries", isCompleted: false },
  ];

  //State
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  //derived state
  const completedCount = todos.filter((t) => t.isCompleted === true).length;
  const totalNumberOfTodos = todos.length;

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
      {
        id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
        text,
        isCompleted: false,
      },
    ]);
  };

  //side Effect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        completedCount,
        totalNumberOfTodos,
        handleClick,
        handleDelete,
        handleAdd,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
