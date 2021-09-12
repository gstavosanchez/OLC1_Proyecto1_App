import { useState } from 'react';

export const UseForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    };
    const handleInputChange = ({ code }) => {
        setValues({
            ...values,
            // [target.name]: target.value,
            code: code,
        });
        // console.log(values);
    };
    return [values, handleInputChange, reset];
};
