import React from 'react';
import '../css/MainContent.css';

const Abogado = props => {
    return(
        <div>
            <a className='lawyer' href={props.abogadoPage}>
                <p style={{fontSize:17 ,color:"#000"}}>{props.Nombre}</p>
                <p style={{fontSize:13, color:"#1b8ab4"}} className="font">{props.Rol}</p>
                <p style={{fontSize:15, color:"#1b8ab4"}} className="font">{props.data.contenido.abogados.sintesis}</p>
            </a>
        </div>
    )
}

export default Abogado;