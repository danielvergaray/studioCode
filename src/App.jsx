import { useState } from 'react'
import { Routes, Route, HashRouter } from "react-router-dom";
import InfoContextProvider from './components/infoContext/InfoContextProvider';
import Home from './components/jxs-pages/Home';
import Servicios from './components/jxs-pages/Servicios';
import Portafolio from './components/jxs-pages/Portafolio';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Footer from './components/jxs-pages/Footer';


function App() {


  return (
    <>
      <HashRouter>
        <InfoContextProvider>
          <Home />
          <Servicios/>
          <Portafolio/>
          <Footer/>
        </InfoContextProvider>
      </HashRouter>
    </>
  )
}

export default App
