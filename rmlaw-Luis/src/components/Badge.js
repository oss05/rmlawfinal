import React, { Component } from 'react';
import Cont from '../assets/contract.png';
import Rank from '../assets/rank.jpg';
import Rank2 from '../assets/rank2.png';
import '../css/Badge.css'
import Chambers from '../assets/chambers-global-practice-guide.pdf';

class Badge extends Component {
    render() { 
        return ( 
            <div className="badge">
                <div className="badgeContent">
                    <a href={Chambers} ><img className="cont" src={Cont} alt="cont"/> </a>
                    <a href="https://chambers.com/law-firm/ruiz-moreno-asociados-latin-america-9:354990" target="_blank"><img src={Rank} style={{width: "100px", marginLeft: "1em"}} alt="rank"/></a> 
                    <img className="rank2" src={Rank2} alt="rank2"/>
                </div>
            </div>
         );
    } 
}
 
export default Badge;