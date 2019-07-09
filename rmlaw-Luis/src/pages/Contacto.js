import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/MainContent.css';

const Contacto = props => {
        return (
            <div className="contacto">
                <h2 className="font" style={{ fontSize: 22 }}>{props.data.contenido.contacto.title}</h2>
                <div className="contactGroup">
                    <FontAwesomeIcon className="contactGroupIcon" icon="envelope" />
                    <p className="contactGroup">Email: contacto@rmlaw.com.mx</p>
                </div>
                <div className="contactGroup">
                    <FontAwesomeIcon className="contactGroupIcon" icon="phone" />
                    <p className="contactGroup">Phone:(55) 1209 6611</p>
                </div>


            </div>
        );
}

export default Contacto;