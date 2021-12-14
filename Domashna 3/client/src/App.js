import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Axios from 'axios';
import Card from './components/Card/card.js';
import './components/Card/card.css'
import Search from '../src/components/Search/search';
import NavBar from './components/nav/NavBar';
import Pocetna from './pages/pocetna';
import  About  from './pages/About.js';
import Prebaruvajne from './pages/prebaruvajne.js';
import Footer from './components/Footer/Footer.js'
import DisPage from './pages/DisPage.js'
function App() {
   
 
  return (

    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Pocetna} />
        <Route path="/prebaruvajne" exact component={Prebaruvajne} />
        <Route path="/about" component={About} />
        <Route path="/DisPage" component={DisPage} />
      </Switch>
      <Footer/>
    </div>
   
    
  );
}

export default App;
