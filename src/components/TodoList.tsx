import DeleteButton from "./DeleteButton";
import useTodosContext from "../libs/hook"

const TodoList = () => {
  const { todos, handleClick, handleDelete } = useTodosContext();

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-12.5 text-14px cursor-pointer border-b border-black/8"
          onClick={() => handleClick(todo.id)}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>
          <DeleteButton id={todo.id} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
