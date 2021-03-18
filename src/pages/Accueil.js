import React from 'react';
import Competences from '../components/Compétences/Competences';
import Header from '../components/Header/Header';
function Accueil(props) {
    // const[titre, setTitre] = useState({
    //     titre : "dev"
    // })
    return (
        <div>
            <Header/>
            <Competences/>
        </div>
    );
}

export default Accueil;