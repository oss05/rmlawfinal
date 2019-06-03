import React, { Component } from 'react';
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import Text from '../components/Text';
import imgDerecho from '../assets/derecho.jpg';
import '../css/MainContent.css';

const Telecomunicaciones = props => {
        return (
            <div className="mainContentAll">
                <Title
                    data={props.data}
                    title={props.data.contenido.transaccional.title}
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgDerecho}
                            altArea="imagen quienes somos"
                        />
                    </div>
                    <div className="textContent">
                        <Text 
                            paddingTop={20} 
                            fontSize={14} 
                            p1={props.data.contenido.transaccional.p1}
                            p2={props.data.contenido.transaccional.p2}
                        />

                    </div>
                </section>

            </div>
        );
}

export default Telecomunicaciones;