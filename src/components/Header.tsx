import Counter from "./Counter";
import Logo from "./Logo";
import type { HeaderProps } from "../types/types";

export default function Header({ todos, completedCount }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-7 col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/8">
      <Logo />
      <Counter todos={todos} completedCount={completedCount} />
    </header>
  );
}
