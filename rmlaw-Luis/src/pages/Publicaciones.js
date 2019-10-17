import React, { Component } from 'react';
import Publicacion from '../components/Publicaciones';
import '../css/Publicaciones.css';
import Chambers from '../assets/chambers-global-practice-guide.pdf';
import Decisiones from '../assets/2015-decisiones.pdf';
import accesoInternet from '../assets/acceso-internet.pdf';
import Controvertida from '../assets/ii-la-controvertida.pdf';
import Subastas from '../assets/i-subastas.pdf';
import redCompartida from '../assets/iii-red-compartida.pdf';
import newseum from '../assets/iv-newseum.pdf';
import Avances from '../assets/AvancesEnElProyectoDeRedCompartida.pdf';
import Apagones from '../assets/Patricia y los apagones.pdf';
import Pasiones from '../assets/DePasionesYRazones.pdf';
import Soluciones from '../assets/SolucionesTecnologicas.pdf';

class Publicaciones extends Component {
    state = {}
    render() {
        return (
            <div className="">
                <h1 className="titulosPublicaciones">PUBLICACIONES</h1>
                <Publicacion
                    Titulo="TELECOMS MEDIA TECHNOLOGY"
                    publicacionLink={Chambers}
                />
                <Publicacion
                    Titulo="PATRICIA Y LOS APAGONES"
                    publicacionLink={Apagones}
                />
                <Publicacion
                    Titulo="SOLUCIONES TECNOLÓGICAS"
                    publicacionLink={Soluciones}
                />
                <Publicacion
                    Titulo="DE PASIONES Y RAZONES"
                    Parrafo="No levantes la voz, mejora tu argumento."
                    publicacionLink={Pasiones}
                />
                <Publicacion
                    Titulo="AVANCES EN EL PROYECTO DE RED COMPARTIDA"
                    Parrafo="Los primeros tres meses de este año han sido de grandes avances en la instrumentación del proyecto de la Red Compartida."
                    publicacionLink={Avances}
                />
                <Publicacion
                    Titulo="2015 AÑO DE DECISIONES Y ACONTECIMIENTOS"
                    Parrafo="Este 2015 ha sido un año de importantes acontecimientos en el sector de las telecomunicaciones"
                    publicacionLink={Decisiones}
                />
                <Publicacion
                    Titulo="¿ES EL ACCESO A INTERNET UN DERECHO HUMANO?"
                    Parrafo="¿Es el acceso a internet un derecho humano?"
                    publicacionLink={accesoInternet}
                />
                {/* <Publicacion
                    Titulo="LA CONTROVERTIDA RED COMPARTIDA"
                    Parrafo="Se le ha llamado promisoria, incomprendida y hasta una ocurrencia llevada a nivel constitucional, pero tal vez el mejor adjetivo para describirla sea el de “controvertida”."
                    publicacionLink={}
                /> */}
                {/* <Publicacion
                    Titulo="DE LA PREPONDERANCIA A LA SEPARACIÓN ESTRUCTURAL Y FUNCIONAL"
                    Parrafo="En el próximo mes de marzo el IFT dará inicio formal a la revisión de las medidas de preponderancia que hace dos años impuso a Telmex y a Telcel al declararlos agentes económicos preponderantes (AEP) en el sector de las telecomunicaciones junto con Telnor, América Móvil, Grupo Carso y Grupo Inbursa."
                    publicacionLink="http://www.rmlaw.com.mx/documentos/separacion-estructural.pdf"
                /> */}
                <Publicacion
                    Titulo="SUBASTAS INCENTIVADAS EN ESTADOS UNIDOS"
                    Parrafo="Actualmente, la Comisión Federal de Comunicaciones de Estados Unidos (FCC) se encuentra trabajando en lo que pareciera ser uno de los procesos de licitación del espectro radioeléctrico más complejos que hasta ahora hayan existido."
                    publicacionLink={Subastas}
                />
                <h1 className="titulosPublicaciones">RED COMPARTIDA, PROYECTO EN MARCHA</h1>
                <Publicacion
                    Titulo="RED COMPARTIDA, PROYECTO EN MARCHA"
                    Parrafo="El pasado 30 de septiembre la SCT publicó las prebases para la licitación de la Red Compartida."
                    publicacionLink={redCompartida}
                />
                <Publicacion
                    Titulo="“NEWSEUM” EL MUSEO DE LAS NOTICIAS"
                    Parrafo="Hace unos días tuve oportunidad de visitar el Museo de la Noticias o “Newseum” en Washington y quiero compartir con ustedes la excelente impresión que me dejó."
                    publicacionLink={newseum}
                />
                <Publicacion
                    Titulo="TEMPORADA DE OFERTAS"
                    Parrafo="El próximo 30 de junio Telmex y Telcel deberán presentar ante el IFT su propuesta de ofertas públicas de referencia para la prestación de servicios y compartición de infraestructura."
                    publicacionLink={Controvertida}
                />
            </div>
        );
    }
}

export default Publicaciones;