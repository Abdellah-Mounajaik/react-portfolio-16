import './Header.css'
import Typist from 'react-typist';
import Navbar from '../Navbar/Navbar';
function Header() {
    return (
        <header>
            <Navbar/>
            <div>
                <img className="dev" src="./img/dev.jpg"></img>
                <Typist className="titre">
                    <h1 className=" text-white"> Mounajaik Abdellah</h1>
                    <Typist.Delay ms={1000} />
                    <h1 className=" text-white">Développeur Web 💻</h1>
              </Typist>
            </div>
        </header>
    );
}

export default Header;