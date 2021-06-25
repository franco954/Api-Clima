
import React from 'react';

import "../styles/symbol.css"


export default function ClimaSimbol(props){

    console.log(props.des)

    const descripcion = props.des

    switch (descripcion) {
        case "cielo claro":
            return(
                <div class="card-symbol">
                    <i class="fas fa-sun"></i>
                </div>
            );
        
        case "nubes":
            return(
                <div class="card-symbol">
                    <i class="fas fa-cloud-sun"></i>
                </div>
            );

        default:
            return(
                <div class="card-symbol">
                    <i class="fas fa-cloud-rain"></i>
                </div>
            );
    }

}
