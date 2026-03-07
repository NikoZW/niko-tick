import { useContext } from "react";
import {TodosContext} from "../contexts/TodoContextProvider.tsx";


export default function useTodosContext(){
    const context = useContext(TodosContext)
    if(!context){
        throw new Error ("forgot to add provider")
    }
    return context
}