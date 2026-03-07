import { createContext, useEffect, useState } from "react";
import type {
  AuthMode,
  Todo,
  TodoContextProviderProbs,
  TTodosContext,
} from "../libs/types";
import { supabase } from "../libs/supabase";
import type { User } from "@supabase/supabase-js";

export const TodosContext = createContext<TTodosContext | null>(null);

export default function TodoContextProvider({
  children,
}: TodoContextProviderProbs) {
  //TodoState
  const [todos, setTodos] = useState<Todo[]>([]);
  //AuthState
  const [user, setUser] = useState<User | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const openLoginModal = () => {
    setAuthMode("login");
    setAuthModalOpen(true);
  };
  const openRegisterModal = () => {
    setAuthMode("register");
    setAuthModalOpen(true);
  };
  const closeAuthModal = () => setAuthModalOpen(false);
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
  const handleLogout = async () => {
  await supabase.auth.signOut()
}

  //side Effect
  useEffect(() => {
    const getInitialTodos = async () => {
      const { data } = await supabase.from("todos").select();
      setTodos(data || []);
    };
    getInitialTodos();
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) =>
      setUser(session?.user ?? null),
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <TodosContext.Provider
      value={{
        todos,
        completedCount,
        totalNumberOfTodos,
        handleClick,
        handleDelete,
        handleAdd,
        user,
        handleLogout,
        authModalOpen,
        authMode,
        openLoginModal,
        openRegisterModal,
        closeAuthModal,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
