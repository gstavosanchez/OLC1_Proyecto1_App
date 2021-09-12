import React, { useContext, useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';
import { ParseContext } from '../../context/parse/ParseContext';

export const Console = () => {
    const [code, setCode] = useState('');
    const { parse } = useContext(ParseContext);
    const { interprete, error_str } = parse;

    useEffect(() => {
        if (error_str !== undefined && error_str !== '') {
            setCode(error_str);
        } else {
            setCode(interprete);
        }
    }, [interprete, error_str]);

    return (
        <>
            <CodeMirror
                value={code}
                options={{
                    theme: 'dracula',
                    keyMap: 'sublime',
                    mode: 'shell',
                    tabSize: 4,
                    readOnly: true,
                }}
            />
        </>
    );
};
