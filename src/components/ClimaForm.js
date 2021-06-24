


import React from 'react';

export default function ClimaForm(props){

    return(

        <form onSubmit={props.clima}>
            <div className="form-group mt-2">
                <input type="text" name="ciudad" placeholder="Buenos Aires" className="form-control" autoFocus autoComplete="off"/>
            </div>
            <div className="form-group mt-2">
                <input type="text" name="pais" placeholder="Argentina" className="form-control" autoComplete="off" />
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary mt-3" type="submit">Enviar</button>
            </div>
        </form>

    )

}