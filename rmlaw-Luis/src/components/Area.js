import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/Area.css";

const Area = props => {
    return (
        <Link  to={props.areaLink} className="area linkArea">
            <div className="area">
                <FontAwesomeIcon className="ii" icon="book" />
                {props.link}
            </div>
        </Link>

    )
}

export default Area;
