

import React, { useState } from "react";

// components
import ClimaForm from "./components/ClimaForm";
import ClimaInfo from "./components/ClimaInfo";

import './styles/title.css'


// bootswatch
import 'bootswatch/dist/quartz/bootstrap.min.css'

function App() {

  const [datos, setDatos] = useState({

    temperature: '',
    description: '',
    humidity: '',
    wind_speed: 0,
    city: '',
    country: '',

  })

  const obtenerClima = async(e) =>{
    e.preventDefault();
    const { ciudad, pais } = e.target.elements;
    const ciudadValue = ciudad.value;
    const paisValue = pais.value;
    
    if (ciudadValue && paisValue){
      
      const KEY = `fc2dbf840f271f99b74a8d4573d15be0`
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadValue},${paisValue}&appid=${KEY}&units=metric&lang=es`;
      fetch(API_URL)
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data)

      setDatos({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
      })

    }
  
  }


  return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card card-body">
              <div className="card-title">
                Api Clima
              </div>
              <ClimaForm clima={obtenerClima}/>
              <ClimaInfo {...datos}/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
