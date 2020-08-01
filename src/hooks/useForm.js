import { useState } from 'react';

const useForm = (valoresIniciais) => {
    const [values, setValues] = useState(valoresIniciais);
    const [loading, setLoading] = useState(false);
    
    const setValue = (key, value) => {
        setValues({
            ...values,
            [key]: value
        });
    }
    
    const handleChange = (ChangeEvent) => {
        const { value } = ChangeEvent.target;
        setValue(
            ChangeEvent.target.getAttribute('name'), 
            value
        );
    }

    const clearForm = () => {
        setValues(valoresIniciais);
    }

    const handleSubmit = (callback) => (FormEvent) => {
        FormEvent.preventDefault();
        callback();
        setLoading(true);
        clearForm();
        console.log(values);
    }

    return {
        values,
        loading,
        handleChange,
        handleSubmit,
    };
}

export default useForm;