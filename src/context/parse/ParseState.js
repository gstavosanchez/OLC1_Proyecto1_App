import React, { useReducer } from 'react';
import { ParseContext } from './ParseContext';
import { parseReducer } from './parseReducer';
import { executeInterprete } from '../../helpers/getParse';
import { types } from '../types/types';

export const ParseState = (props) => {
    const initialState = {
        parse: '',
    };
    const [state, dispatch] = useReducer(parseReducer, initialState);

    const interprete = async (code) => {
        const res = await executeInterprete(code);
        dispatch({
            type: types.parse,
            payload: res.data,
        });
    };

    return (
        <ParseContext.Provider
            value={{
                parse: state.parse,
                interprete,
            }}
        >
            {props.children}
        </ParseContext.Provider>
    );
};
