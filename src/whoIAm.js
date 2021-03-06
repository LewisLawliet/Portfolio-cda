import React from 'react';
import ReactDOM from 'react-dom';
import './whoIam.css';
import photo from './img/ma-photo.svg';

const WhoIAm =()=>{
    const height = window.screen.height;
    console.log("heiiiiigt", height)
    return(
        <div className="whoIam" id="whoIam" style={{"height": `${height}px`}}>
         <div className="photo-and-me">  
         
                <div className="center">
                    
                    <div className="bandeau whoIAm"><img src={photo} className="photo" alt="photo" />QUI SUIS-JE</div>
                </div>                    
        </div>

         <div className="center top">
             <div className="content">
             <p>Ancien Conseiller Clientèle, je suis quelqu'un qui aime sans cesse apprendre.
                N'ayant pas peur de l'inconnu, je laisse ma curiosité m'orienter dans l'apprentissage
                de nouveaux univers. De nature joviale, j'aime rire et partager des moments fun avec
                 le reste de l'équipe.
            </p><br /> 

            <p>Le code m’offre un gigantesque univers de création et une formidable opportunité pour construire.
                Grace à Javascript, j’ai pû développer une véritable appétence.
            </p><br />

            <p>Ma citation préférée: «Plus vous saurez regarder loin dans le passé, plus vous verrez 
                loin dans le futur »
            </p>
            <div className="center button"><button className="cv center"><a href="/img/cv-nadir-djebbar.pdf.pdf" target="_blank"  
             style={{"text-decoration": "none", "color": "inherit"}} download="cv-nadir-djebbar.pdf.pdf" rel="noopener noreferrer">Télécharger CV</a></button></div>
          </div>
          
         </div>
                  

            
        </div>
    )
}

export default WhoIAm