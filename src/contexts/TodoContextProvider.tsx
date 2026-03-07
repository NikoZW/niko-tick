import { createContext, useState } from "react";
import type {
  Todo,
  TodoContextProviderProbs,
  TTodosContext,
} from "../libs/types";

export const TodosContext = createContext<TTodosContext | null>(null);

export default function TodoContextProvider({
  children,
}: TodoContextProviderProbs) {
  const initialTodos = [
    { id: 1, text: "study exam", isCompleted: false },
    { id: 2, text: "walk the dog", isCompleted: true },
    { id: 3, text: "buy groceries", isCompleted: false },
  ];
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
  //derived state
  const completedCount = todos.filter((t) => t.isCompleted === true).length;
  const totalNumberOfTodos = todos.length;

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
