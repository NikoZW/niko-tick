type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};
export default function Button({ buttonType, children }: ButtonProps) {
  return (
    <button
      className={`h-11.25 bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer ${buttonType === "secondary" ? "opacity-85" : ""}`}
    >
      {children}
    </button>
  );
}
