import AddToDoForm from "./AddToDoForm";
import Button from "./Button";

export default function Sidebar() {
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/8 px-6.25 pt-4.5 pb-7">
      <AddToDoForm />
      <div className="mt-auto space-y-2">
        <Button buttonType="secondary">Log In</Button>
        <Button buttonType="secondary">Register</Button>
      </div>
    </section>
  );
}
