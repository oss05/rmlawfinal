import React from 'react';
import '../css/Publicaciones.css';

const Abogado = props => {
    return (
        <div>
            <div className="titulosPublicaciones">Eli Manuel Ramírez Villaseñor</div>
            <p className=" abogadoCont" style={{ fontSize: 14 , color: "#635f7d", textAlign: "justify" }}>
                {props.data.contenido.abogados.eli}
            </p>
        </div>
    )
}

export default Abogado;