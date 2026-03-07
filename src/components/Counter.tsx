import useTodosContext from "../libs/hook"


export default function Counter() {
  const { completedCount, totalNumberOfTodos } = useTodosContext();
  return (
    <p>
      <b>{completedCount}</b> / {totalNumberOfTodos} todos completed
    </p>
  );
}
