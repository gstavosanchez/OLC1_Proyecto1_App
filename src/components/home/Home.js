import React from 'react';
import Typical from 'react-typical';
import './home.css';
export const Home = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="container-home">
                <div className="title-home">
                    <h1>
                        <Typical
                            steps={[
                                'Organización',
                                1000,
                                'Organización de Lenguajes y',
                                1000,
                                'Organización de Lenguajes y Compiladores 2',
                                500,
                            ]}
                            loop={Infinity}
                            // wrapper="h1"
                        />
                    </h1>
                </div>
                <div className="description-home">
                    <h2>
                        <b>Primer Proyecto</b>
                    </h2>
                    <h3>Elmer Gustavo Sánchez García</h3>
                    <h4>201801351</h4>
                </div>
            </div>
        </div>
    );
};
