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
  const handleClick = async (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    await supabase
      .from("todos")
      .update({ isCompleted: !todo.isCompleted })
      .eq("id", id);
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
  const handleDelete = async (id: number) => {
    await supabase.from("todos").delete().eq("id", id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };
  const handleAdd = async (text: string) => {
    if (!user) return;
    const { data, error } = await supabase
      .from("todos")
      .insert({
        text,
        isCompleted: false,
        user_id: user.id,
      })
      .select("id, text, isCompleted")
      .single();
    if (error) {
      console.error("Failed to add todo:", error);
      return;
    }
    if (data)
      setTodos((prev) => [
        ...prev,
        { id: data.id as number, text: data.text, isCompleted: data.isCompleted ?? false },
      ]);
  };
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  //side Effect: load todos for the current user
  useEffect(() => {
    if (!user) {
      setTodos([]);
      return;
    }
    const getInitialTodos = async () => {
      const { data, error } = await supabase
        .from("todos")
        .select("id, text, isCompleted")
        .eq("user_id", user.id)
        .order("created_at", { ascending: true });
      if (error) {
        console.error("Failed to fetch todos:", error);
        return;
      }
      setTodos(
        (data || []).map((row) => ({
          id: row.id as number,
          text: row.text,
          isCompleted: row.isCompleted ?? false,
        }))
      );
    };
    getInitialTodos();
  }, [user?.id]);

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
