import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import InfoCard from './components/infocard';
import InfoPlanets from './components/infoplanets';
import injectContext from './store/appContext';
import './App.css';

const App = props => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>        
          <Route exact path="/" component={Home} />
          <Route exact path="/infocard/:id" component={InfoCard} />
          <Route exact path="/infoplanets/:id" component={InfoPlanets} />
        </Switch>       
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default injectContext(App);