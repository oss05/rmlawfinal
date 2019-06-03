import React from 'react'
import Title from '../components/Title'
import Abogado from '../components/Abogado';
import '../css/MainContent.css';

const Abogados = props => {
        return (
            <div className="mainContentAll">
                <div className="lawyer-title">
                   <h2 className="font" style={{ fontSize: 36 }}>{props.data.contenido.bolsaDeTrabajo.title} </h2>
                   <p style={{ fontSize: 13 }}>{props.data.contenido.subtitle}</p>
                </div>
                <Title
                    data={props.data}
                    title={props.data.contenido.bolsaDeTrabajo.subtitle}
                />
                <div className="input-component">
                   <p style={{ fontSize: 14 }}>{props.data.contenido.bolsaDeTrabajo.p1}</p>
                    <label htmlFor="name" >Name:
                        <input id="name" type="text" />
                    </label>
                    <label htmlFor="email">Email:
                        <input id="email" type="email" />
                    </label>
                    <label htmlFor="phone">Phone Number:
                        <input id="phone" type="text" />
                    </label>
                    <label htmlFor="subject">Subject:
                        <input id="subject" type="text" />
                    </label>
                    <label htmlFor="message">Message:
                        <textarea id="message" type="text" />
                    </label>
                    <button type="submit">✓Submit</button>
                   <p style={{ fontSize: 14 }} >{props.data.contenido.bolsaDeTrabajo.p2}</p>
                </div>
            </div>
        );
}

export default Abogados;