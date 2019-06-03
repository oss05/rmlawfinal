import React, { Component } from 'react';
import ImgCont from './imgCont';
import TelecomunicacionesImg from '../assets/telecomunicaciones.jpg';
import AsesoriaImg from '../assets/asesoria.jpg';
import CompetenciaImg from '../assets/competencia1.jpg';
import RadioImg from '../assets/radio2.jpg';
import DerechoImg from '../assets/derecho2.jpg';
import EnergiaImg from '../assets/energia.jpg';
import FinanciamientoImg from '../assets/financiamiento.jpg';
import LitigioImg from '../assets/litigio.jpg';
import '../css/Img.css';

class Img extends Component {
    state = {}
    render() {
        return (
            <div className="img">
                <div className="imgContainer">
                    <ImgCont
                        linkHomeImg="telecomunicaciones"
                        homeImage={TelecomunicacionesImg}
                        altHomeImage="Imagen Telecomunicaciones"
                        imgWidth={185}
                        imgPadding={3}
                    />
                    <ImgCont
                        linkHomeImg="creditos-finanzas"
                        homeImage={FinanciamientoImg}
                        altHomeImage="Imagen Financiamiento"
                        imgWidth={185}
                        imgPadding={3}
                    />
                    <ImgCont
                        linkHomeImg="radiodifusion"
                        homeImage={RadioImg}
                        altHomeImage="Imagen Radio"
                        imgWidth={185}
                        imgPadding={3}
                    />
                </div>
                <div className="imgContainer">
                    <ImgCont
                        linkHomeImg="derecho-corporativo"
                        homeImage={DerechoImg}
                        altHomeImage="Imagen Derecho"
                        imgWidth={185}
                        imgPadding={3}
                    />
                    <ImgCont
                        linkHomeImg="energia"
                        homeImage={EnergiaImg}
                        altHomeImage="Imagen Energia"
                        imgWidth={185}
                        imgPadding={3}
                    />
                    <ImgCont
                        linkHomeImg="competencia-economica"
                        homeImage={CompetenciaImg}
                        altHomeImage="Imagen Competencia"
                        imgWidth={185}
                        imgPadding={3}
                    />
                </div>
                <div className="imgContainer">
                    <ImgCont
                        linkHomeImg="asesoria-legislativa"
                        homeImage={AsesoriaImg}
                        altHomeImage="Imagen Asesoria"
                        imgWidth={185}
                        imgPadding={3}
                    />
                    <ImgCont
                        linkHomeImg="litigio"
                        homeImage={LitigioImg}
                        altHomeImage="Imagen Litigio"
                        imgWidth={185}
                        imgPadding={3}
                    />
                    <article 
                    className="emptySpace"/>
                      
                </div>



            </div>
        );
    }
}

export default Img;