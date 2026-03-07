import type { ButtonProps } from "../libs/types";

export default function Button({ buttonType, children, disabled, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      className={`h-11.25 bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer ${buttonType === "secondary" ? "opacity-85" : ""} disabled:opacity-50 disabled:cursor-not-allowed`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
