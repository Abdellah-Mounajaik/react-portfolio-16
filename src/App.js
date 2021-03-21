import React, { Fragment } from 'react';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import { BrowserRouter as Browser, Route, Switch, } from 'react-router-dom'
function App(props) {
  return (
    <Fragment>
      <Browser>
        <Switch>
          <Route exact path ='/' component={Accueil}/>
          <Route exact path ='/Contact' component={Contact}/>
        </Switch>
      </Browser>
    </Fragment>
  );
}

export default App;