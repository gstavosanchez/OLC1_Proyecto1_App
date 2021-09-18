import axios from 'axios';

const API = 'https://app-olc2-jolc.herokuapp.com';

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
