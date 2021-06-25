

import React, { useState } from "react";

// components
import ClimaForm from "./components/ClimaForm";
import ClimaInfo from "./components/ClimaInfo";
import ClimaTitle from "./components/ClimaTitle"

import './styles/error.css'



// bootswatch
import 'bootswatch/dist/quartz/bootstrap.min.css'

function App() {

  const [datos, setDatos] = useState({

    temperature: '',
    description: '',
    humidity: '',
    wind_speed: 0,
    pressure: '',
    city: '',
    country: '',
    request: false,
    spinner: false,
    error: true,
    msj: false,


  })

  const obtenerClima = async (e) => {
    e.preventDefault();
    const { ciudad, pais } = e.target.elements;
    const ciudadValue = ciudad.value;
    const paisValue = pais.value;

    if (ciudadValue && paisValue) {

      setDatos({
        spinner: true,
      })

      const KEY = `fc2dbf840f271f99b74a8d4573d15be0`
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadValue},${paisValue}&appid=${KEY}&units=metric&lang=es`;
      fetch(API_URL)
      const response = await fetch(API_URL);
      const data = await response.json();
      if (response.status == 200) {
        console.log(data)
        setDatos({
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,
          city: data.name,
          pressure: data.main.pressure,
          country: data.sys.country,
          request: true,
          spinner: false,
          error: false,
          msj: false,
        })
      }
      else{
        setDatos({
          spinner: false,
          msj: true,
        })
      }

    }

  }


  return (

    <div className="container p-2">
      <div className="row">
        <div className="col-md-8 col-lg-6 col-12 mx-auto">
          <div className="card card-body">
            <ClimaTitle />
            <ClimaForm clima={obtenerClima} />
            {
              datos.msj &&
              <div className="error mt-3">
                <p className="text-warning"> Datos invalidos </p>
              </div>
            }
            {
              datos.spinner &&
              <div class="d-flex justify-content-center mt-3">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            {
              datos.request &&
              <div>
                <ClimaInfo {...datos} />
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
