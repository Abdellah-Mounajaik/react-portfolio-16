import React from 'react';
import './Projet.css'
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Typist from 'react-typist';

function Projet(props) {
    return (
        <section className="proj pb-5">
            <div className="text-center pt-5 mb-5">
                <Bounce top>
                <h1>Mes projets</h1>
                </Bounce>
            </div>
            <div className="container-fluid text-center">
                <div className="row">
                    <Slide bottom>
                       <div className="col-lg-4">
                        <h2 className="mb-4">Réaliser en : Html/Sass</h2>
                        <img className="vib w-100" src="./img/chef.png"></img>
                    </div>
                    <div className="col-lg-4">
                        <h2 className="mb-4">Réaliser en : Html/Sass/Js</h2>
                        <img className="vib w-100"  src="./img/emp.png"></img>    
                    </div>
                    <div className="col-lg-4">
                        <h2 className="mb-4">Réaliser en : React</h2>
                        <img className="vib w-100" src="./img/port.png"></img>
                    </div>
                    
                    </Slide>
                    
                </div>
            </div>            
        </section>
    );
}

export default Projet;