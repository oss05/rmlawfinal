import React from 'react';
import Area from './Area';
import "../css/Area.css";

const Areas = props => {
    return (
        <div className="areas">
            <Area
                link={props.data.navbar.telecom.content}
                areaLink="telecomunicaciones" />
            <Area
                link={props.data.navbar.creditos.content}
                areaLink="creditos-finanzas" />
            <Area
                link={props.data.navbar.radio.content}
                areaLink="radiodifusion" />
            <Area
                link={props.data.navbar.transaccional.content}
                areaLink="derecho-corporativo" />
            <Area
                link={props.data.navbar.energia.content}
                areaLink="energia" />
            <Area
                link={props.data.navbar.competenciaEconomica.content}
                areaLink="competencia-economica" />
            <Area
                link={props.data.navbar.asesoria.content}
                areaLink="asesoria-legislativa" />
            <Area
                link={props.data.navbar.litigio.content}
                areaLink="litigio" />
        </div>
    )
}
export default Areas;