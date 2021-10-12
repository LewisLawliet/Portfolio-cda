import logo from './img/logo_nd.svg';
import logo_landing from './img/logo_landing.svg';
import cloud from './img/cloud.svg';
import mac from './img/mac.svg';
import serveur from './img/serveur.svg';
import moniteur from './img/moniteur.svg';
import docker from './img/docker.svg';
import './App.css';
import WhoIAm from "./whoIAm";
import Portfolio from "./portfolio";
import Competences from "./competences";
import CentresInteret from "./centresInteret"
import Footer from "./footer"
import {useState,  useEffect} from "react"

function App() {
  const [heightLogo, setHeightLogo]= useState(null)
  const height = window.screen.height;
  

  const test =()=> {
  setTimeout(() => {
    setHeightLogo(document.getElementsByClassName("logo-landing")[0].clientHeight)
    console.log("work", heightLogo)
  }, 500);  
  }  

  useEffect(()=>{
    test()
  },[heightLogo]) 

 
  return (
    
    <div className="portfolio">

        <header>
        <img src={logo} className="logo" alt="logo" />
        <div className="navigation">
          <ul className="nav">
            <li><a href ="#whoIam" style={{"text-decoration": "none", "color": "inherit"}}>QUI SUIS JE</a></li>
            <li><a href ="#portfolio" style={{"text-decoration": "none", "color": "inherit"}}>PORTFOLIO</a></li>
            <li><a href ="#competences" style={{"text-decoration": "none", "color": "inherit"}}>COMPETENCES</a></li>
            <li><a href ="#centres-interet" style={{"text-decoration": "none", "color": "inherit"}}>CENTRES D'INTERET</a></li>
          </ul>  
        </div>
        </header>
        <div className="landing" style={{"height": `${height}px`}}>
          <div className="logo-and-presentation">
          <img src={docker} className="logo-docker position" alt="logo-docker" /> 
            <div className="presentation" style={{"height": `${heightLogo}px`}}>
            <img src={serveur} className="logo-serveur position" alt="logo-serveur" />
              <ul className="my-name-and-job">
                <li className="name">Nadir Djebbar</li>
                <li className="job">Développeur Web Front-End</li>
                <div className="know-more"><li className="box"><a href ="#whoIam" style={{"text-decoration": "none", "color": "inherit"}}>EN SAVOIR +</a></li></div>
                <img src={moniteur} className="logo-moniteur position" alt="logo-moniteur" />
              </ul>
            </div>
            <img src={mac}  className="logo-mac position" alt="logo-mac" />            
       
            <img src={logo_landing} className="logo-landing" alt="logo-landing" />
            <img src={cloud} className="logo-cloud position" alt="logo-cloud" />              
          </div>

        </div>
        <WhoIAm />
        <Portfolio />
        <Competences />
        <CentresInteret />
        <Footer />
    </div>
  );
}

export default App;
