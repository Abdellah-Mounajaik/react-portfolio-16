import React from 'react';
import Navigation from '../components/Navbar/Navbar';
import Rejoindre from '../components/Rejoindre/Rejoindre';
import { useState } from 'react';
function Contact(props) {
    const [titre] = useState({
        cont : "Contact",
    
      })
    return (
        <div>
            <Navigation/>
            <Rejoindre titre={titre}/>
        </div>
    );
}

export default Contact;