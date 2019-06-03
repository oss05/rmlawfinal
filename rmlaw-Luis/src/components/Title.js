import React from 'react'
import Text from '../components/Text';
import '../css/Title.css'
import '../css/Text.css';

const Title = (props) => {
    return (
        <div className="preventTitle">
            <div className="title">
                <h2 className="titleFont">{props.title}</h2>
                <p className="text">{props.data.contenido.subtitle}</p>
            </div>
        </div>
    )
}

export default Title;