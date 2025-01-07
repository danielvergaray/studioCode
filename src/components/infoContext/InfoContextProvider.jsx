import React from 'react'
import InfoContext from './InfoContext';
import home_fondo from '../../assets/imagenes/home/home_fondo.jpg';
import navBar_nombreEmpresa from '../../assets/imagenes/navbar/nombreEmpresa.png'
import iconoEstrella from '../../assets/imagenes/home/iconoEstrella.png'; 

const InfoContextProvider = ({children}) => {

  const informacion = [
    {
      home: [
       { home_fondo,
        titulo:  "hola, somos",
        nombreEmpresa: "studioCode",
        subtitulo : 'web & design',
        iconoEstrella,
        navBar_nombreEmpresa,
      }
      ],
      
    }
  ]

    const values = {
      infoHomeArray: Object.values(informacion[0].home),
      };

    return <InfoContext.Provider value={values}>{children}</InfoContext.Provider>;
}

export default InfoContextProvider