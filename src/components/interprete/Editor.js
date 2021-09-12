import { useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';
import { UseForm } from '../../hooks/UseForm';
import { IoIosPlay } from 'react-icons/io';
import './interprete.css';
import { ParseContext } from '../../context/parse/ParseContext';

export const Editor = () => {
    const { interprete } = useContext(ParseContext);
    const [formValue, handleInputChange] = UseForm({
        code: localStorage.getItem('code')
            ? localStorage.getItem('code').toString()
            : 'println("hola mundo");',
    });
    const { code } = formValue;
    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem('code', code);
        await interprete(code);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="header-notepad-parse">
                <div className="tab-parse">
                    <p></p>
                </div>
                <div className="tab-parse-active">
                    <p>main.jl</p>
                </div>
                <div className="buttons-run">
                    <button className="btn-parse">
                        {' '}
                        <IoIosPlay />
                    </button>
                </div>
            </div>
            <div className="editor-parse">
                <CodeMirror
                    value={code}
                    onChange={(editor, data, value) => {
                        handleInputChange({ code: editor.getValue() });
                    }}
                    options={{
                        theme: 'dracula',
                        keyMap: 'sublime',
                        mode: 'julia',
                        tabSize: 4,
                    }}
                />
            </div>
        </form>
    );
};
