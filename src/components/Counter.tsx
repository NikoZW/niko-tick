import type { CounterProps } from "../types/types";

export default function Counter({
  totalNumberOfTodos,
  completedCount,
}: CounterProps) {
  return (
    <p>
      <b>{completedCount}</b> / {totalNumberOfTodos} todos completed
    </p>
  );
}
