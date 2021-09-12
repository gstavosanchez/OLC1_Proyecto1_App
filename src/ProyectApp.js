import React from 'react';
import { AppRoute } from './routes/AppRoute';
import { ParseState } from './context/parse/ParseState';
import 'bootswatch/dist/yeti/bootstrap.min.css';

export const ProyectApp = () => {
    return (
        <ParseState>
            <AppRoute />
        </ParseState>
    );
};
