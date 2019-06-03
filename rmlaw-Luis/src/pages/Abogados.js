import React, { Component } from 'react';
import Abogado from '../components/Abogado';
import '../css/MainContent.css';

const Abogados = props => {

        return (
            <div className="mainContentAll">
                <div className="lawyer-title">
                    <h2 className="font" style={{fontSize:22}}>{props.data.contenido.abogados.title} </h2>
                    <p style={{fontSize:13}}>{props.data.contenido.subtitle} </p>
                </div>
                <div className="lawyer-component">
                    <Abogado
                        data={props.data}
                        abogadoPage="/ivan"
                        Nombre="Iván Ruiz Moreno"
                        Rol={props.data.contenido.abogados.rol}
                    />
                    <Abogado
                        data={props.data}
                        abogadoPage="/eli"
                        Nombre="Eli Manuel Ramírez Villaseñor"
                        Rol={props.data.contenido.abogados.rol2}
                    />
                    <Abogado
                        data={props.data}
                        abogadoPage="/erika"
                        Nombre="Erika Marcela Estrever Aviña"
                        Rol={props.data.contenido.abogados.rol3}
                    />
                    <Abogado
                        data={props.data}
                        abogadoPage="/ruben"
                        Nombre="Rubén Gutiérrez Díaz"
                        Rol={props.data.contenido.abogados.rol2}
                    />
                    <Abogado
                        data={props.data}
                        abogadoPage="/denia"
                        Nombre="Denia Resendiz."
                        Rol={props.data.contenido.abogados.rol4}
                    />
                </div>
            </div>
        );
}

export default Abogados;