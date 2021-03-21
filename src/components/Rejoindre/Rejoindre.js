import React from 'react';
import './Rejoindre.css'
import LightSpeed from 'react-reveal/LightSpeed';
function Rejoindre(props) {
    return (
        <section>
            <LightSpeed>
            <div className="ct text-center mt-5">
                <h1 className="text-center mt-2">Contact</h1>
                <h2 className="mb-3">Vous pouvez me retrouver sur :</h2>
                <i class="lcontact fas fa-map-pin mb-3"></i>
                <p> Bruxelles</p> 
                <i class="lcontact fas fa-envelope mb-3"></i> 
                <p>mounajaikabdellah@gmail.com</p>
                <i class="lcontact fas fa-phone-alt mb-3"></i>
                <p>02 34 56 78 9</p>
                <a className="text-white" href="https://github.com/Abdellah-Mounajaik">
                    <i class="lcontact fab fa-github mb-3"></i>
                </a>
                <a href="https://be.linkedin.com/" className="text-white d-block mt-3 mb-3">
                    <i class="lcontact fab fa-linkedin-in"></i>
                </a>
            </div>
            </LightSpeed>
        </section>
    );
}

export default Rejoindre;