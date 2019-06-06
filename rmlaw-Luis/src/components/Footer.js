import React from 'react'
import Logo from '../assets/somo-white.png'
import aviso from '../assets/aviso-de-privacidad.pdf'
import '../css/Footer.css';

const Footer = props => {
    return (
        <div className="prevent-footer">
            <div className="footer">
                <div className="left">
                    {props.data.footer.by.content}
                    <img src={Logo} alt="logo soma" />
                </div>
                <div className="right">
                   <a href={aviso}>{props.data.footer.privacy.content}</a> 
                </div>
            </div>
        </div>
    );
}


export default Footer;