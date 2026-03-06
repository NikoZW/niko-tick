export type Todo = {
  id: number
  text: string
  isCompleted: boolean
}

export type TodoListProps = {
  todos: Todo[]
  handleClick: (id: number) => void
  handleDelete: (id: number) => void
}

export type DeleteButtonProps = {
  id: number;
  handleDelete: (id: number) => void;
};

export type HeaderProps = {
  todos: Todo[]
  completedCount: number
}
export type CounterProps = {
  todos: Todo[]
  completedCount: number
}

export type SideProps = {
handleAdd:(text: string) => void
}


export type AddToDoFormProps = {
  handleAdd:(text: string) => void
}