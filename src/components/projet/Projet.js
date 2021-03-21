import React from 'react';
import { useState } from 'react';
import './Projet.css'
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';

function Projet(props) {
    const [titre] = useState({
        proj : "Mes projets",
    
      })
    return (
        <section className="proj pb-5">
            <div className="text-center pt-5 mb-5">
                <Bounce top>
                <h1>{titre.proj}</h1>
                </Bounce>
            </div>
            <div className="container-fluid text-center">
                <div className="row">
                    <Slide bottom>
                       <div className="col-lg-4">
                        <h2 className="mb-4">Réaliser en : Html/Sass</h2>
                        <img className="vib w-100" src="./img/chef.png" alt="chef"></img>
                    </div>
                    <div className="col-lg-4">
                        <h2 className="mb-4">Réaliser en : Html/Sass/Js</h2>
                        <img className="vib w-100"  src="./img/emp.png" alt="emp"></img>    
                    </div>
                    <div className="col-lg-4">
                        <h2 className="mb-4">Réaliser en : React</h2>
                        <img className="vib w-100" src="./img/port.png" alt="port"></img>
                    </div>
                    
                    </Slide>
                    
                </div>
            </div>            
        </section>
    );
}

export default Projet;