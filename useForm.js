import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target:{value,name}}) =>{
        // console.log(name,value);
        //Name hace de propiedad en el objeto , es decir, username : value = lo que se escriba
        setFormState({
            ...formState,
            [name] : value
        });
    };
    const onResetForm = () =>{
        setFormState(initialForm);
    };
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
