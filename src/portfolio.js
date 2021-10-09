import React from 'react';
import ReactDOM from 'react-dom';
import './portfolio.css';
import emplacement from './img/emplacement.svg';
import en_cours from './img/en_cours.svg';
import gaidjin from './img/gaidjin.svg';
import portfolio from './img/portfolio.svg';
import github from './img/github.svg';
import logo_gaidjin from './img/logo_gaidjin.svg';
import logo_portfolio from './img/logo_portfolio.svg';

const Portfolio =()=> {
    const height = window.screen.height;
    console.log(window)
    return(
        <div className="portfolio" style={{"height": `${height}px`}}>
            <div className="center top">
                <div className="bandeau">PORTFOLIO</div>
            </div>

            <div className="center size-100">
                <div className="black-screen">
                    <div className="projets">
                        <div className="projet">
                        <div className="tt">
                        <div className="my-container">
                            <img src={gaidjin} className="gaidjin img" alt="gaidjin" />
                            <div className="texte_centrer">
                                <span className="title-project">Gaidjin</span><br />
                                Projet sur la culture Japonaise. Ce site contient des articles fun sur différentes
                                thématiques de la civilisation. Il contient également une série de Quizz. 
                                Have fun ! ;)
                                <a href="https://github.com/LewisLawliet/FrontFilrouge" target="_blank">
                                    <img src={github} className="github" alt="git" />
                                </a>
                                <a href="https://gaidjin-informe.netlify.app/" target="_blank">
                                    <img src={logo_gaidjin} className="logo-project" alt="gaidjinn" />
                                </a> 
                            </div>
                        </div>
                        </div>

                        <div className="tt">
                        <div className="my-container">
                        <img src={portfolio} className="portfolio-img" alt="portfolio-img" />
                            <div className="texte_centrer">
                                <span className="title-project">Portfolio</span><br />
                                Projet sur la culture Japonaise. Ce site contient des articles fun sur différentes
                                thématiques de la civilisation. Il contient également une série de Quizz. 
                                Have fun ! ;)
                                <a href="https://github.com/LewisLawliet/FrontFilrouge" target="_blank">
                                    <img src={github} className="github" alt="git" />
                                </a>
                                <a href="https://gaidjin-informe.netlify.app/" target="_blank">
                                    <img src={logo_portfolio} className="logo-project" alt="gaidjin" />
                                </a> 
                            </div>
                        </div> 
                        </div>

                        <div className="tt">
                        <div className="my-container">
                        <img src={en_cours} className="emplacement" alt="emplacement" />
                        <div className="texte_centrer">
                                <span className="title-project">Signature</span><br />
                                Projet sur la culture Japonaise. Ce site contient des articles fun sur différentes
                                thématiques de la civilisation. Il contient également une série de Quizz. 
                                Have fun ! ;)
                                <a href="https://github.com/LewisLawliet/FrontFilrouge" target="_blank">
                                    <img src={github} className="github central" alt="github" />
                                </a>

                            </div>
                        </div>
                        </div>    

                        <img src={en_cours} className="emplacement" alt="emplacement" />  
                        </div>

                        <div className="projet">
                        <img src={emplacement} className="emplacement" alt="emplacement" /> 
                        <img src={emplacement} className="emplacement" alt="emplacement" /> 
                        <img src={emplacement} className="emplacement" alt="emplacement" /> 
                        <img src={emplacement} className="emplacement" alt="emplacement" /> 
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )

}
export default Portfolio