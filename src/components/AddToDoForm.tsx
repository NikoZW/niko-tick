import { useState } from "react";
import Button from "./Button";
import type { AddToDoFormProps } from "../types/types";

export default function AddToDoForm({ handleAdd }: AddToDoFormProps) {
  const [text, setText] = useState("");
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

      <Button>Add to list</Button>
    </form>
  );
}
