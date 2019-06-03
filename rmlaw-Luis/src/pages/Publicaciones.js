import React, { Component } from 'react';
import Publicacion from '../components/Publicaciones';
import '../css/Publicaciones.css';

class Publicaciones extends Component {
    state = {}
    render() {
        return (
            <div className="">
                <h1 className="titulosPublicaciones">IVÁN RUIZ MORENO</h1>
                <Publicacion
                    Titulo="TELECOMS MEDIA TECHNOLOGY"
                    publicacionLink="http://www.rmlaw.com.mx/documentos/chambers-global-practice-guide.pdf"
                />
                <Publicacion
                    Titulo="PATRICIA Y LOS APAGONES"
                    publicacionLink="http://www.rmlaw.com.mx/documentos/patricia-apagones.pdf"
                />
                <Publicacion
                    Titulo="SOLUCIONES TECNOLÓGICAS"
                    publicacionLink="http://www.rmlaw.com.mx/documentos/soluciones-tecnologicas.pdf"
                />
                <Publicacion
                    Titulo="DE PASIONES Y RAZONES"
                    Parrafo="No levantes la voz, mejora tu argumento."
                    publicacionLink="http://www.rmlaw.com.mx/documentos/pasiones-razones.pdf"
                />
                <Publicacion
                    Titulo="AVANCES EN EL PROYECTO DE RED COMPARTIDA"
                    Parrafo="Los primeros tres meses de este año han sido de grandes avances en la instrumentación del proyecto de la Red Compartida."
                    publicacionLink="http://www.rmlaw.com.mx/documentos/avances-red-compartida.pdf"
                />
                <Publicacion
                    Titulo="2015 AÑO DE DECISIONES Y ACONTECIMIENTOS"
                    Parrafo="Este 2015 ha sido un año de importantes acontecimientos en el sector de las telecomunicaciones"
                    publicacionLink="http://www.rmlaw.com.mx/documentos/2015-decisiones.pdf"
                />
                <Publicacion
                    Titulo="¿ES EL ACCESO A INTERNET UN DERECHO HUMANO?"
                    Parrafo="¿Es el acceso a internet un derecho humano?"
                    publicacionLink="http://www.rmlaw.com.mx/documentos/acceso-internet.pdf"
                />
                <Publicacion
                    Titulo="LA CONTROVERTIDA RED COMPARTIDA"
                    Parrafo="Se le ha llamado promisoria, incomprendida y hasta una ocurrencia llevada a nivel constitucional, pero tal vez el mejor adjetivo para describirla sea el de “controvertida”."
                    publicacionLink="http://www.rmlaw.com.mx/documentos/ii-la-controvertida.pdf"
                />
                <Publicacion
                    Titulo="DE LA PREPONDERANCIA A LA SEPARACIÓN ESTRUCTURAL Y FUNCIONAL"
                    Parrafo="En el próximo mes de marzo el IFT dará inicio formal a la revisión de las medidas de preponderancia que hace dos años impuso a Telmex y a Telcel al declararlos agentes económicos preponderantes (AEP) en el sector de las telecomunicaciones junto con Telnor, América Móvil, Grupo Carso y Grupo Inbursa."
                    publicacionLink="http://www.rmlaw.com.mx/documentos/separacion-estructural.pdf"
                />
                <Publicacion
                    Titulo="SUBASTAS INCENTIVADAS EN ESTADOS UNIDOS"
                    Parrafo="Actualmente, la Comisión Federal de Comunicaciones de Estados Unidos (FCC) se encuentra trabajando en lo que pareciera ser uno de los procesos de licitación del espectro radioeléctrico más complejos que hasta ahora hayan existido."
                    publicacionLink="http://www.rmlaw.com.mx/documentos/i-subastas.pdf"
                />
                <h1 className="titulosPublicaciones">RED COMPARTIDA, PROYECTO EN MARCHA</h1>
                <Publicacion
                    Titulo="RED COMPARTIDA, PROYECTO EN MARCHA"
                    Parrafo="El pasado 30 de septiembre la SCT publicó las prebases para la licitación de la Red Compartida."
                    publicacionLink="http://www.rmlaw.com.mx/documentos/iii-red-compartida.pdf"
                />
                <Publicacion
                    Titulo="“NEWSEUM” EL MUSEO DE LAS NOTICIAS"
                    Parrafo="Hace unos días tuve oportunidad de visitar el Museo de la Noticias o “Newseum” en Washington y quiero compartir con ustedes la excelente impresión que me dejó."
                    publicacionLink="http://www.rmlaw.com.mx/documentos/iv-newseum.pdf"
                />
                <Publicacion
                    Titulo="TEMPORADA DE OFERTAS"
                    Parrafo="El próximo 30 de junio Telmex y Telcel deberán presentar ante el IFT su propuesta de ofertas públicas de referencia para la prestación de servicios y compartición de infraestructura."
                    publicacionLink="http://www.rmlaw.com.mx/documentos/v-temporada.pdf"
                />
            </div>
        );
    }
}

export default Publicaciones;