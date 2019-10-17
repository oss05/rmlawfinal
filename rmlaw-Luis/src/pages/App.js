import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar';
import Home from './Home';
import QuienesSomos from './QuienesSomos';
import Abogados from './Abogados';
import Telecomunicaciones from './Telecomunicaciones';
import CreditosFinanzas from './CreditosFinanzas';
import Radiodifusion from './Radiodifusion';
import DerechoCorporativo from './DerechoCorporativo';
import Energia from './Energia';
import CompetenciaEconomica from './CompetenciaEconomica';
import AsesoriaLegislativa from './AsesoriaLegislativa';
import Litigio from './Litigio';
import BolsaTrabajo from './BolsaTrabajo';
import Publicaciones from './Publicaciones';
import Contacto from './Contacto';
import Badge from '../components/Badge';
import Footer from '../components/Footer';
import Ivan from "./Ivan";
import Eli from "./Eli";
import Erika from "./Erika";
import Ruben from "./Ruben";
import Denia from "./Denia";
import Esp from '../lang/Esp.json'
import Eng from '../lang/Eng.json'
import '../css/App.css';
library.add(fas)

function initializeReactGA() {
  ReactGA.initialize('UA-147143628-1');
  ReactGA.pageview('/');
}

initializeReactGA()


const tagManagerArgs = {
  gtmId: 'GTM-PP2QRTD'
}

TagManager.initialize(tagManagerArgs)

const dataEsp = Esp
const dataEng = Eng
  

class App extends Component {

  state = {
    data: dataEsp,
    idioma: "Esp"
  }

  handelChangeIdioma = () => {
    this.state.idioma === "Esp" ?
    this.setState({
      data:dataEng,
      idioma:"Eng"
    }
    )
    :
    this.setState({
      data:dataEsp,
      idioma:"Esp"
    }
    )
  }

  render() {
    return (
    <Router>
      <div>
        <Navbar data={this.state.data} handelChangeIdioma={this.handelChangeIdioma} idioma={this.state.idioma}/>
        <Badge/>
        <Route exact path="/" component={() => <Home data={this.state.data} />} />
        <Route path="/quienessomos" component={() => <QuienesSomos data={this.state.data} /> } />
        <Route path="/abogados" component={() => <Abogados data={this.state.data} />} />
        <Route path="/telecomunicaciones" component={() => <Telecomunicaciones data={this.state.data} />} />
        <Route path="/creditos-finanzas" component={() => <CreditosFinanzas data={this.state.data} />} />
        <Route path="/radiodifusion" component={() => <Radiodifusion data={this.state.data} />} />
        <Route path="/derecho-corporativo" component={() => <DerechoCorporativo data={this.state.data} />} />
        <Route path="/energia" component={() => <Energia data={this.state.data} />} />
        <Route path="/competencia-economica" component={() => <CompetenciaEconomica data={this.state.data} />} />
        <Route path="/asesoria-legislativa" component={() => <AsesoriaLegislativa data={this.state.data} />} />
        <Route path="/litigio" component={() => <Litigio data={this.state.data} />} />
        <Route path="/bolsadetrabajo" component={() => <BolsaTrabajo data={this.state.data} />} />
        <Route path="/publicaciones" component={() => <Publicaciones data={this.state.data} />} />
        <Route path="/contacto" component={() => <Contacto data={this.state.data} />} />
        <Route path="/ivan" component={() => <Ivan data={this.state.data} />} />
        <Route path="/eli" component={() => <Eli data={this.state.data} />} />
        <Route path="/erika" component={() => <Erika data={this.state.data} />} />
        <Route path="/ruben" component={() => <Ruben data={this.state.data} />} />
        <Route path="/denia" component={() => <Denia data={this.state.data} />} />
        <Footer data={this.state.data}/>
      </div>
    </Router>);
  }
}

export default App;

