import moment from 'moment';
import React, { useContext, useMemo } from 'react';
import { ParseContext } from '../../context/parse/ParseContext';
import './report.css';
export const Report = () => {
    const { parse } = useContext(ParseContext);
    const { error_list } = parse;

    const arrayError = () => {
        if (Array.isArray(error_list)) {
            return error_list.map((data) => {
                return {
                    ...data,
                    time: moment(data.time)
                        .format('DD/MM/YYYY, h:mm a')
                        .toString(),
                };
            });
        }
        return [];
    };

    const errorList = useMemo(() => arrayError(), [error_list]);
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="contenedor-reporte">
                <div className="errores-titulo">
                    <h2>Tabla de Errores</h2>
                </div>
                <div className="erores-reporte my-custom-scrollbar table-wrapper-scroll-y">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Linea</th>
                                <th scope="col">Columna</th>
                                <th scope="col">Fecha y hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {errorList.length > 0 ? (
                                errorList.map((data, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <th>{data.descripcion}</th>
                                        <th>{data.line}</th>
                                        <th>{data.column}</th>
                                        <th>{data.time}</th>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <th scope="row">0</th>
                                    <th>Sin erores</th>
                                    <th>-</th>
                                    <th>-</th>
                                    <th>-</th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="entorno-titulo">
                    <h2>Tabla de Simbolos</h2>
                </div>
                <div className="entorno-repote">
                    <table className="table table-hover">
                        <thead className="">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Ambito</th>
                                <th scope="col">Fila</th>
                                <th scope="col">Columna</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
