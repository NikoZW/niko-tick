import type { DeleteButtonProps } from "../libs/types";

export default function DeleteButton({ id, onDelete }: DeleteButtonProps) {
  return (
    <button
      className="cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onDelete(id);
      }}
    >
      ❌
    </button>
  );
}
