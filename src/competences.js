import React from 'react';
import ReactDOM from 'react-dom';
import './competences.css';
import stack from './img/stack.svg';
import outils from './img/outils.svg';

const Competences =()=>{
    const height = window.screen.height;
    console.log("heiiiiigt", height)
    return(
        <div className="competences" id="competences" style={{"height": `${height}px`}}>            
                <div className="center"><div className="bandeau">COMPETENCES</div></div>   
                <div className="stack-and-tools">
                    
                        
                            <img src={outils} className="outils bande" alt="outils" />
                            <img src={stack} className="stack bande" alt="stack" />                        
                      
                </div>    
        </div>
    )
}

export default Competences