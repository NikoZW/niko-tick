import { useState } from "react";
import { supabase } from "../libs/supabase";
import { useTodo } from "../libs/hook";
import Button from "./Button";

export default function AuthModal() {
  const { authMode, closeAuthModal } = useTodo();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);

  const isLogin = authMode === "login";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        closeAuthModal();
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage({
          type: "success",
          text: "Check your email to confirm your account.",
        });
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setMessage({ type: "error", text: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 font-roboto"
      onClick={closeAuthModal}
      role="dialog"
      aria-modal="true"
      aria-label={isLogin ? "Log in" : "Register"}
    >
      <div
        className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-xl font-medium text-[#322618]">
          {isLogin ? "Log In" : "Register"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 w-full rounded-[5px] border border-black/15 px-3 text-[#322618] outline-none focus:border-[#473a2b]"
            required
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-11 w-full rounded-[5px] border border-black/15 px-3 text-[#322618] outline-none focus:border-[#473a2b]"
            required
            minLength={6}
            autoComplete={isLogin ? "current-password" : "new-password"}
          />
          {message && (
            <p
              className={`text-sm ${message.type === "error" ? "text-red-600" : "text-green-600"}`}
            >
              {message.text}
            </p>
          )}
          <div className="flex gap-2 pt-1">
            <Button buttonType="primary" type="submit" disabled={loading}>
              {loading ? "..." : isLogin ? "Log In" : "Register"}
            </Button>
            <Button buttonType="secondary" onClick={closeAuthModal}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
