import Button from "./Button";

export default function AddToDoForm() {
  return (
    <form>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        className="h-11.25 border border-black/12 rounded-[5px] my-2.25 text-[14px] block w-full "
      />
      <Button>Add to list</Button>
    </form>
  );
}
