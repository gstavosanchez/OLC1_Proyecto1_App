import { Graphviz } from 'graphviz-react';
import React, { useContext } from 'react';
import { ParseContext } from '../../context/parse/ParseContext';
import './graph.css';
// "start": "react-scripts start", - package.json
export const Graph = () => {
    const { parse } = useContext(ParseContext);
    const { grafo } = parse;
    console.log(grafo);
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="contenedor-graph">
                <div className="contenedor-graph-head">
                    <h2>Árbol de análisis sintáctico</h2>
                </div>
                <div className="graph-graph">
                    {grafo !== undefined && (
                        <Graphviz
                            dot={grafo}
                            options={{
                                fit: true,
                                height: 500,
                                width: 800,
                                zoom: true,
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
