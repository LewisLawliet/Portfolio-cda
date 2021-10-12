import {React, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './competences.css';
import './centresInteret.css';
import stack from './img/stack.svg';
import outils from './img/outils.svg';

import ac from './img/favorites/ac.svg';
import bcs from './img/favorites/bcs.svg';
import conan from './img/favorites/conan.svg';
import mgs3 from './img/favorites/mgs3.svg';
import opm from './img/favorites/opm.svg';
import sf from './img/favorites/street-fighter.svg';
import TLOU from './img/favorites/the-last-of-us.svg';
import TWD from './img/favorites/TWD.svg';
import Wu from './img/favorites/Wu.svg';



const CentresInterets =()=>{
    const height = window.screen.height;
    const [count, setCount]= useState(0)
    const [type, setType]= useState(null)

    useEffect(()=>{
        const checkType =()=>{
            if(count >=0 && count < 3){
                setType("Manga")
            }
    
            if(count >=3 && count < 6){
                setType("Séries")
            }
    
            if(count >= 6){
                setType("Jeux")
            }
        }
        checkType()

    },[count])

 

    const favorites = [        
        <img className = "imgSlide" srcSet={ac} />,
        <img className = "imgSlide" srcSet={opm} />,
        <img className = "imgSlide" srcSet={conan} />,
        <img className = "imgSlide" srcSet={bcs}/>,
        <img className = "imgSlide" srcSet={TWD}/>,
        <img className = "imgSlide" srcSet={Wu}/>,
        <img className = "imgSlide" srcSet={TLOU} />,
        <img className = "imgSlide" srcSet={mgs3} />,
        <img className = "imgSlide" srcSet={sf} />
    ]

    const nextSlide =()=> {
        if(count < favorites.length-1){
        setCount(count+1)
        }
        else {
            setCount(0)
        }
    }

    const previousSlide =()=> {
      if(count >0){  
        setCount(count-1)
        }

        else {
            setCount(favorites.length-1)
        }
    }

    return(
        <div className="centres-interet" id="centres-interet" style={{"height": `${height}px`}}>            
                <div className="center"><div className="bandeau">Centres d'Intérêt</div></div>   
                <div className="slider"> 
                        
                        <div className="center-title"><div className="title-favorite">{type}</div></div> 
                        <div className="slides">
                        {/*<div className="center-title"><div className="title-favorite">{type}</div></div>*/}
                            {favorites[count]}
                            
                            <div className="previous" onClick={previousSlide}>
                                <div className="triangle-left"></div>
                            </div>
                            <div className="next" onClick={nextSlide}>
                            <div className="triangle-right"></div>
                            </div>
                        </div>
                </div>    
        </div>
    )
}

export default CentresInterets