import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-7 col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/8">
      <Logo />
      <Counter />
    </header>
  );
}
