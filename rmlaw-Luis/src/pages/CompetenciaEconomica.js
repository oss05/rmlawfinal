import React from 'react'
import AreaImg from '../components/AreaImg';
import Title from '../components/Title';
import Text from '../components/Text';
import imgCompetencia from '../assets/competencia.jpg';
import '../css/MainContent.css';

const Telecomunicaciones = props => {
        return (
            <div className="mainContentAll">
                <Title
                    data={props.data}
                    title={props.data.contenido.competenciaEconomica.title}
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgCompetencia}
                            altArea="imagen quienes somos"
                        />
                    </div>
                    <div className="textContent">
                        <Text
                            paddingTop={20} 
                            fontSize={14}
                            p1={props.data.contenido.competenciaEconomica.p1}
                            p2={props.data.contenido.competenciaEconomica.p2}
                        />
                    </div>
                </section>

            </div>
        );
}

export default Telecomunicaciones;