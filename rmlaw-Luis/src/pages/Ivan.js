import React from 'react';
import '../css/Publicaciones.css';

const Abogado = props => {
    return (
        <div>
            <div className="titulosPublicaciones">IVÁN RUIZ MORENO</div>
            <p className=" abogadoCont" style={{ fontSize: 14 , color: "#635f7d", textAlign: "justify" }}>
                {props.data.contenido.abogados.ivan}
            </p>
        </div>
    )
}

export default Abogado;