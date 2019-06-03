import React from 'react'
import Img from '../components/Img';
import Areas from '../components/Areas';
import '../css/MainContent.css';

const Home = props => {

        return ( 
            <div className="mainContent">
            <Img/>
            <Areas
                data={props.data}
            />
        </div>  
         );
}
 
export default Home;