import { useState } from "react";


export const useCounter = (initialValue = 10) =>{

    const [counter, setCounter] = useState(initialValue);
    const incrementar = (value = 1) =>{
        setCounter(counter + value);
    };
    const restar = () =>{
        setCounter(counter - 1 >= 0 ? counter - 1: 0);
    };
    const reset = () =>{
        setCounter(0);
    }

    return {
        counter,
        incrementar,
        restar,
        reset,
    };
}