import './Header.css'
import Typist from 'react-typist';
function Header({titre}) {
    return (
        <header>
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
                    <p className="px-2">Accueil</p>
                    <p>Contact</p>
                </div>
            </nav>
            <div className="">
                <img className="dev" src="./img/dev.jpg"></img>
                <Typist className="titre">
                    <h1 className=" text-white"> Mounajaik Abdellah</h1>
                    <Typist.Delay ms={1000} />
                    <h1 className=" text-white">Jeune développeur web 💻</h1>
              </Typist>
            </div>
        </header>
    );
}

export default Header;