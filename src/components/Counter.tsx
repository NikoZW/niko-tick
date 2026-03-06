import type { CounterProps } from "../types/types";

export default function Counter({ todos, completedCount }: CounterProps) {
  return (
    <p>
      <b>{completedCount}</b> / {todos.length} todos completed
    </p>
  );
}
