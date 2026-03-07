import type { User } from "@supabase/supabase-js"

export type Todo = {
  id: number
  text: string
  isCompleted: boolean
}

export type ButtonProps = {
  buttonType?: "primary" | "secondary"
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void 

}

export type DeleteButtonProps = {
  id: number;
  onDelete: (id: number) => void;
}


export type TodoContextProviderProbs = {
    children: React.ReactNode
}

export type TTodosContext = {
  todos: Todo[]
  completedCount: number
  totalNumberOfTodos: number
  handleClick: (id: number) => void
  handleDelete: (id: number) => void
  handleAdd: (text: string) => void
  user: User | null          
  handleLogout: () => void   
}