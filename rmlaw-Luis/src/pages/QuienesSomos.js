import React from 'react'
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import Text from '../components/Text';
import imgQuienesSomos from '../assets/logo-grande.jpg';
import '../css/MainContent.css';


const QuienesSomos = props => {
        return (
            <div className="mainContentAll">
                <Title
                    data={props.data}
                    title={props.data.contenido.quienesSomos.title}
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgQuienesSomos}
                            altArea="imagen quienes somos"
                        />
                    </div>
                    <div className="textContent">
                        <p style={{fontSize:19}}>{props.data.contenido.subtitle}</p>
                        <Text
                            paddingTop={20} 
                            fontSize={14}
                            p1={props.data.contenido.quienesSomos.p1}
                            p2={props.data.contenido.quienesSomos.p2}
                            p3={props.data.contenido.quienesSomos.p3}
                            p4={props.data.contenido.quienesSomos.p4}
                        />
                    </div>
                </section>

            </div>
        );
}

export default QuienesSomos;