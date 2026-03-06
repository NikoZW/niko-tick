import type { DeleteButtonProps } from "../types/types";

export default function DeleteButton({ id, handleDelete }: DeleteButtonProps) {
  return (
    <button
      className="cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        handleDelete(id);
      }}
    >
      ❌
    </button>
  );
}
