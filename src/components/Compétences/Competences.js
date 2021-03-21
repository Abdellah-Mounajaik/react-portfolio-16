import React, { useRef, useState } from 'react';
import Slide from 'react-reveal/Slide';
import './Competences.css'
function Competences(props) {
    return (
        <section className="comp pt-3 pb-1">
            <div className="mt-5 mb-5">
                <Slide top>
                    <h1 className="pt-5 text-center test">Mes Compétences</h1>
                </Slide>
            </div>
            <div className="container">
                <Slide left>
                <div className="row">
                    <div id="html" className="divc col-md-6 col-lg-3 text-center">
                        <h1 className="mb-4 mt-5">Html</h1>
                        <i class="mb-5 logo fab fa-html5"></i>
                    </div>
                    <div id="css" className="divc col-md-6 col-lg-3 text-center">
                        <h1 className="mb-4 mt-5">Css</h1>
                        <i class="mb-5 logo fab fa-css3-alt"></i>
                    </div>
                    <div id="sass" className="divc col-md-6 col-lg-3 text-center">
                        <h1 className="mb-4 mt-5">Sass</h1>
                        <i class="mb-5 logo fab fa-sass"></i>
                    </div>
                    <div id="boot" className="divc col-md-6 col-lg-3 text-center">
                        <h1 className="mb-4 mt-5">Bootstrap</h1>
                        <i class=" mb-5 logo fab fa-bootstrap"></i>
                    </div>
                </div>                                  
                </Slide>
                <Slide right>
                <div className="row mt-5 mb-5">
                    <div id="react" className="divc col-md-6 col-lg-3 text-center">
                        <h1 className="mb-4 mt-5 mb">React</h1>
                        <i class=" pb-3 logo fab fa-react"></i>
                    </div>
                    <div id="js" className="divc col-md-6 col-lg-3 text-center">
                        <h1 className="mb-4 mt-5">Javascript</h1>
                        <i class="logo fab fa-js pb-3"></i>
                    </div>
                    <div id="git" className="divc col-md-6 col-lg-3 text-center">
                        <h1 className="mb-4 mt-5">Git</h1>
                        <i class="logo fab fa-git-alt pb-3"></i>
                    </div>
                    <div id="res" className="divc col-md-6 col-lg-3 text-center pb-4">
                        <h1 className="mb-4 mt-5">Responsive</h1>
                        <i class="logo fas fa-mobile-alt pb-3"></i>
                    </div>
                </div>                                  
                </Slide>
            </div>
        </section>
    );
}
export default Competences;