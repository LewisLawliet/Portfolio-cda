import React from 'react';
import './competences.css';
import './footer.css';
import github from './img/footer-github.svg';
import linkedin from './img/footer-linkedin.svg';
import gmail from './img/footer-gmail.svg';

const Footer =()=>{
const height = 300;
    return(
        <div className="footer" style={{"height": `${height}px`}}>            
                
            <div className="all-logo">
                <div className="middle">
                    <a href="https://github.com/LewisLawliet" target="_blank"  rel="noopener noreferrer">
                        <img src={github} className="icon" alt="footer-github" />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/nadir-djebbar-4bb284175/" target="_blank"  rel="noopener noreferrer">
                        <img src={linkedin} className="icon" alt="footer-linkedin" />
                    </a>    

                    <a href="mailto:nadirdjebbar@gmail.com" target="_blank"  rel="noopener noreferrer">    
                        <img src={gmail} className="gmail icon" alt="footer-gmail" />
                    </a>    
                </div>        
            </div>    
                
                  
        </div>
    )
}

export default Footer