import React from 'react';
import { Editor } from './Editor';
import { IoIosTrash } from 'react-icons/io';
import './interprete.css';
import { Console } from './Console';
export const Interprete = () => {
    return (
        <div className="container-parse animate__animated animate__fadeIn">
            <div className="flex-parse">
                <div className="notepad-parse">
                    {/* <div className="header-notepad-parse">
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
                    </div> */}
                    <Editor />
                    {/* <div className="editor-parse">
                    </div> */}
                </div>
                <div className="shell-parse">
                    <div className="buttons-clear">
                        <button className="btn-clear">
                            <IoIosTrash />
                        </button>
                    </div>
                    <div className="console-parse">
                        <Console />
                    </div>
                </div>
            </div>
        </div>
    );
};
