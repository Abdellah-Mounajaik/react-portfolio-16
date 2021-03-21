import React from 'react';
import Competences from '../components/Compétences/Competences';
import Header from '../components/Header/Header';
import Projet from '../components/projet/Projet';
function Accueil(props) {
 
    return (
        <div>
            <Header/>
            <Competences/>
            <Projet/>
        </div>
    );
}

export default Accueil;