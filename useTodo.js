import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const useTodo = () =>{
    const init = () =>{
        return JSON.parse(localStorage.getItem("todos")) || [];
    };
    const [todos, dispatch] = useReducer(todoReducer,[],init);

    useEffect(() => {
        
        localStorage.setItem("todos",JSON.stringify(todos,null,2));

    }, [todos])
    
    const handleNewTodo = (todo) =>{
        const action = {
            type: "[TODO] Add Todo",
            payload: todo,
        };

        dispatch(action);
    }
    const handleDeleteTodo = (id) => {
        dispatch({
            type: "[TODO] Delete Todo",
            payload: id,
        })
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: "[TODO] Toggle Todo",
            payload: id,
        })
    }
    const pendientes = () =>{
        return todos.filter(e => !e.done).length;
    }
    const allTodos = () =>{
        return todos.length;
    }

    return {
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todos,
        allTodos,
        pendientes,
    }
}
export {
    useTodo,
};