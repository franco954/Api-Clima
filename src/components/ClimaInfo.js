



import React from 'react';


import ClimaSimbol from './ClimaSimbol';
import '../styles/info.css'


export default function ClimaInfo(props) {


    console.log(props)

    return (

        <>
            {
                props.error ? <></>
                    :

                    <div class="card-info mt-1">
                        <ClimaSimbol des={props.description} />
                        <div class="card-body">
                            {
                                props.city && props.country &&
                                <p> <b> <i className="fas fa-location-arrow"></i>  Ubicación: </b> {props.city}, {props.country}</p>
                            }
                            {
                                props.temperature &&
                                <p> <b> <i className="fas fa-temperature-low"></i>  Temperatura: </b> {props.temperature} ℃, {props.description}</p>
                            }
                            {
                                props.humidity &&
                                <p> <b> <i className="fas fa-water"></i>  Humedad: </b> {props.humidity} % </p>
                            }
                            {
                                props.pressure &&
                                <p> <b> <i class="fas fa-smog"></i> Presión: </b> {props.pressure} inHg </p>
                            }
                            {
                                props.wind_speed &&
                                <p> <b> <i className="fas fa-wind"></i>  Velocidad del Viento: </b> {props.wind_speed} mph</p>
                            }

                        </div>
                    </div>

            }

        </>


    )

}