import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/MainContent.css';

const Abogado = props => {
    return(
        <div>
            <Link className='lawyer' to={props.abogadoPage}>
                <p style={{fontSize:17 ,color:"#000"}}>{props.Nombre}</p>
                <p style={{fontSize:13, color:"#1b8ab4"}} className="font">{props.Rol}</p>
                <p style={{fontSize:15, color:"#1b8ab4"}} className="font">{props.data.contenido.abogados.sintesis}</p>
            </Link>
        </div>
    )
}

export default Abogado;