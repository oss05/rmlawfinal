import React from 'react';
import '../css/Text.css';

const Text = props => {
    return (
        <div className="text">
            <p style={{fontSize:props.fontSize, color:"#635f7d", marginTop:props.paddingTop}}>
                {props.p1} <br /> <br />
                {props.p2} <br /> <br />
                {props.p3} <br /> <br />
                {props.p4} <br /> <br />
                {props.p5} <br /> <br />
                {props.p6} <br /> <br />
                {props.p7} <br /> <br />
                {props.p8} <br /> <br />
                {props.p9} <br /> <br />
                {props.p10} <br /> <br />
                {props.p11}
            </p>
        </div>
    )
}

export default Text;