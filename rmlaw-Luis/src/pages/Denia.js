import React from 'react';
import '../css/Publicaciones.css';

const Abogado = props => {
    return (
        <div>
            <div className="titulosPublicaciones">Denia Reséndiz</div>
            <p className=" abogadoCont" style={{ fontSize: 14 , color: "#635f7d", textAlign: "justify" }}>
                {props.data.contenido.abogados.ruben}
            </p>
        </div>
    )
}

export default Abogado;