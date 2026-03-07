import {useState } from "react";
import Button from "./Button";
import useTodosContext from "../libs/hook"

export default function AddToDoForm() {
  const [text, setText] = useState("");
  const { handleAdd } = useTodosContext();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd(text);
        setText("");
      }}
    >
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        className="h-11.25 border border-black/12 rounded-[5px] my-2.25 text-[14px] block w-full pl-3"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <Button type="submit">Add to list</Button>
    </form>
  );
}
