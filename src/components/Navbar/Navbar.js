import React from 'react';
import { NavLink } from 'react-router-dom';
import'./Navbar.css'
function Navigation(props) {
    return (
        <div>
            <nav className="d-flex justify-content-between">
                <div>
                   <ul className="d-none d-md-flex text-white pl-3">
                        <li className>
                            <i class="fas fa-map-pin mr-1"></i> Bruxelles
                        </li>
                        <li className="ml-2">
                            Mounajaik Abdellah
                        </li>
                        <img className="ml-3 rounded-circle mt-1" src="./img/am.jpg" alt="logo-am"></img>
                    </ul> 
                </div>
                <div className="pr-3 text-white d-flex">
                    <NavLink to ="/">
                        <p className="text-white px-2">Accueil</p>
                    </NavLink>
                    <NavLink to ="/Contact">
                        <p className="text-white">Contact</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;