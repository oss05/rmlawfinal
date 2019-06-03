import React, { Component } from 'react';
import Cont from '../assets/contract.png';
import Rank from '../assets/rank.jpg';
import Rank2 from '../assets/rank2.png';
import '../css/Badge.css'

class Badge extends Component {
    render() { 
        return ( 
            <div className="badge">
                <div className="badgeContent">
                    <a href="" ><img className="cont" src={Cont} alt="cont"/> </a>
                    <img src={Rank} alt="rank"/>
                    <img className="rank2" src={Rank2} alt="rank2"/>
                </div>
            </div>
         );
    }
}
 
export default Badge;