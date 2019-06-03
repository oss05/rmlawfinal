import React, { Component } from 'react';
import '../css/Img.css';

class ImgCont extends Component {
    state = {}
    render() {
        return (
            <a href={this.props.linkHomeImg}>
                <img src={this.props.homeImage} alt={this.props.altHomeImage} className="homeImg" style={{width:this.props.imgWidth ,padding:this.props.imgPadding}} />
            </a>
        );
    }
}

export default ImgCont;