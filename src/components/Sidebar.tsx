import AddToDoForm from "./AddToDoForm";
import Button from "./Button";
import type { SideProps } from "../types/types";

export default function Sidebar({ handleAdd }: SideProps) {
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/8 px-6.25 pt-4.5 pb-7">
      <AddToDoForm handleAdd={handleAdd} />
      <div className="mt-auto space-y-2">
        <Button buttonType="secondary">Log In</Button>
        <Button buttonType="secondary">Register</Button>
      </div>
    </section>
  );
}
