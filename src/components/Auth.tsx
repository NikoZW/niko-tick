import { useState } from "react";
import { supabase } from "../libs/supabase";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Button from "./Button";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isLogin) {
      await supabase.auth.signInWithPassword({ email, password });
    } else {
      await supabase.auth.signUp({ email, password });
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center font-roboto bg-[#f1d4b3] min-h-screen flex-col">
      <BackgroundHeading />
      <main className="relative w-243 h-159 bg-white rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header />

        <TodoList />

        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
