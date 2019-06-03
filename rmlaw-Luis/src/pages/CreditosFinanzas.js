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
                    title={props.data.contenido.creditos.title}
                />
                <section className="downSection">
                    <div className="areaImg">
                        <AreaImg
                            imgArea={imgQuienesSomos}
                            altArea="imagen quienes somos"
                        />
                    </div>
                    <div className="textContent">
                        <Text
                            paddingTop={20} 
                            fontSize={14}
                            data={props.data}
                            p1={props.data.contenido.creditos.p1}
                        />
                    </div>
                </section>

            </div>
        );
}

export default QuienesSomos;