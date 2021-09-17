import React, { useContext, useMemo } from 'react';
import { ParseContext } from '../../context/parse/ParseContext';
import './report.css';
export const TableReport = () => {
    const { parse } = useContext(ParseContext);
    const { tabla_simbolo } = parse;

    const tableArray = () => {
        if (Array.isArray(tabla_simbolo)) {
            return tabla_simbolo;
        }
        return [];
    };
    const tableLista = useMemo(() => tableArray(), [tabla_simbolo]);
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="errores-titulo">
                <h2>Tabla de simbolos</h2>
            </div>
            <div className="erores-reporte my-custom-scrollbar table-wrapper-scroll-y">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Ambito</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableLista.length > 0 ? (
                            tableLista.map((data, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <th>{data.nombre}</th>
                                    <th>{data.tipo}</th>
                                    <th>{data.ambito}</th>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <th scope="row">0</th>
                                <th>
                                    Sin variables, funciones, etc, declaradas
                                </th>
                                <th>-</th>
                                <th>-</th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
