import { useState } from "react";

export default function Counter() {
  const [state, setState] = useState(0);
  return (
    <p onClick={() => setState(state + 1)}>
      <b>{state}</b> / 0 todos completed
    </p>
  );
}
