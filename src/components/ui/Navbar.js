import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GoMarkGithub } from 'react-icons/go';
import './navbar.css';
export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        JOLCAPP
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/home"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/parse"
                            >
                                Analizar
                            </NavLink>
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/report"
                            >
                                Reporte
                            </NavLink>
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/graph"
                            >
                                Grafo
                            </NavLink>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/home"
                            >
                                <div className="icon-aling">
                                    <div className="icono">
                                        <GoMarkGithub />
                                    </div>
                                    <div>
                                        <p>GitHub</p>
                                    </div>
                                </div>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
