import type { Todo } from "../types";

type Props = {
  id: number;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function DeleteButton({ id, setTodos }: Props) {
  return (
    <button
      className="cursor-pointer"
      onClick={() => setTodos((prev) => prev.filter((t) => t.id !== id))}
    >
      ❌
    </button>
  );
}
