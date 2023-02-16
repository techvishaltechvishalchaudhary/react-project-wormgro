import React, { useState, useEffect } from "react"
import './App.css';
import { BrowserRouter as Router,  Routes,  Route } from 'react-router-dom';
import Nav from './cmp/global/module/navlinks.js';
import Home from './pages';
import AboutWormGro from './pages/about_wormgro';
import ProfitAndPlanet from './pages/profit_planet';
import AboutUS from './pages/about_us';
import Results from './pages/results';
import Contact from './pages/contact';
import ThankYou from './pages/thank_you';
import TrafficLight from './pages/traffic-light';

function App() {
  
  const [mode, setMode] = useState('light');
  const themeMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.setAttribute('class', 'dark_mode');
    }else{
      setMode('light');
      document.body.setAttribute('class', 'light_mode');
    }
  }

  useEffect(() => {
    document.body.setAttribute('class', `${mode}_mode`);
  })

  return (
    <Router> 
      <Nav themetoggle={themeMode} mode={mode}/>
      <Routes> 
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about-wormgro' element={< AboutWormGro />}></Route>
        <Route exact path='/profit-and-planet' element={< ProfitAndPlanet />}></Route>
        <Route exact path='/about-us' element={< AboutUS />}></Route>
        <Route exact path='/results' element={< Results />}></Route>
        <Route exact path='/contact-order' element={< Contact />}></Route>
        <Route exact path='/thank-you' element={< ThankYou />}></Route>
        <Route exact path='/traffic-light' element={< TrafficLight />}></Route>
      </Routes>  
    </Router>
  );
}

export default App;