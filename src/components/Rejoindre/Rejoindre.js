import React from 'react';
import './Rejoindre.css'
function Rejoindre(props) {
    return (
        <section>
            <div className="ct text-center mt-5">
                <h1 className="text-center">Contact</h1>
                <h2>Vous pouvez me retrouver sur :</h2>
                <i class="fas fa-envelope"></i> 
                <p>gmail : mounajaikabdellah@gmail</p>
                <i class="fas fa-phone-alt"></i>
                <p>télephone : 02345678</p>
                <i class="fas fa-map-pin mr-1"></i>
                <p> Bruxelles</p>
                <a className="text-white" href="https://github.com/Abdellah-Mounajaik">
                    <i class="fab fa-github"></i>
                </a>
                <a className="text-white">
                <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
        </section>
    );
}

export default Rejoindre;