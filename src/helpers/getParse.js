import axios from 'axios';

const API = 'http://localhost:5000';

export const executeInterprete = async (code) => {
    const newData = {
        code: code,
    };
    return await axios.post(`${API}/parse`, newData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
