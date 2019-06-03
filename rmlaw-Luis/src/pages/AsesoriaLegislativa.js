import React, { Component } from 'react';
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import Text from '../components/Text';
import imgRadio from '../assets/asesoria2.jpg';
import '../css/MainContent.css';

const Telecomunicaciones = props => {
        return (
            <div className="mainContentAll">
                <Title
                data={props.data}
                    title={props.data.contenido.asesoria.title}
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgRadio}
                            altArea="imagen quienes somos"
                        />
                    </div>
                    <div className="textContent">
                    <Text
                            paddingTop={20} 
                            fontSize={14}
                            p1={props.data.contenido.asesoria.p1}
                            
                        />
                    </div>
                </section>

            </div>
        );
}

export default Telecomunicaciones;