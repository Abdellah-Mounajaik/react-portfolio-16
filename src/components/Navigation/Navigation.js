import React from 'react';
import { NavLink } from 'react-router-dom';
function Navigation(props) {
    return (
        <div>
            <nav className="d-flex justify-content-between">
                <div>
                   <ul className="text-white pl-3">
                        <li className>
                            <i class="fas fa-map-pin mr-1"></i> Bruxelles
                        </li>
                        <li className="ml-2">
                            Mounajaik Abdellah
                        </li>
                        <img className="ml-3 rounded-circle mt-1" src="./img/am.jpg"></img>
                    </ul> 
                </div>
                <div className="pr-3 text-white d-flex">
                    <NavLink className="text-white" to ="/">
                        <p className="px-2">Accueil</p>
                    </NavLink>
                    <NavLink className="text-white" to ="/Contact">
                        <p>Contact</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;