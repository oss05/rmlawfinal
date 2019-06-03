import React from 'react'
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import Text from '../components/Text';
import imgEnergia from '../assets/energia2.jpg';
import '../css/MainContent.css';

const Telecomunicaciones = props => {
        return (
            <div className="mainContentAll">
                <Title
                    data={props.data}
                    title={props.data.contenido.energia.title}
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgEnergia}
                            altArea="imagen quienes somos"
                        />
                    </div>
                    <div className="textContent">
                        <Text
                            paddingTop={20} 
                            fontSize={14}
                            p1={props.data.contenido.energia.p1}
                            p2={props.data.contenido.energia.p2}
                            p3={props.data.contenido.energia.p3}
                            p4={props.data.contenido.energia.p4}
                        />
                    </div>
                </section>

            </div>
        );
}

export default Telecomunicaciones;