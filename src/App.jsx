import { useState } from 'react'
import { Routes, Route, HashRouter } from "react-router-dom";
import InfoContextProvider from './components/infoContext/InfoContextProvider';
import Home from './components/jxs-pages/Home';
import Servicios from './components/jxs-pages/Servicios';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <InfoContextProvider>
          <Home />
          <Servicios/>
        </InfoContextProvider>
      </HashRouter>
    </>
  )
}

export default App
