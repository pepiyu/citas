import React, {Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
    // Crear State de citas
const [cita, actualizarCita] = useState({
    mascota : "",
    propietario : "",
    fecha : "",
    hora : "",
    sintomas : "",


})

// funcion que se ejecuta

const handleState = e =>{
    // siempre con la función
    actualizarCita({
        ...cita,
        [e.target.name]: e.target.value
    })
}

const {mascota, propietario, fecha, hora, sintomas } = cita

const submitCita = e=>{
    e.preventDefault()

    if(mascota.trim()==='' || propietario.trim()==='' || fecha.trim()==='' || hora.trim()==='' || sintomas.trim()==='' ){
        actualizarError(true)
        return
    }
    actualizarError(false)

    cita.id= uuid()
    crearCita(cita)

    // reiniciar cita
    actualizarCita({
        mascota : "",
        propietario : "",
        fecha : "",
        hora : "",
        sintomas : "",
    
    })
}
const [error, actualizarError] = useState(false)

        return ( 
    <Fragment>
        <h2>Crear Cita</h2>
        {error ? <p className="alerta-error">Todos los campos son obligatorios</p>
        :null
        }
        <form 
        onSubmit={submitCita}
        >
            <label>Nombre de la mascota</label>
            <input 
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre de la mascota"
                onChange={handleState}
                value={mascota}
            
            />
            <label>Nombre del dueno</label>
            <input 
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre del dueno"
                onChange={handleState}
                value={propietario}

            />
            <label>Fecha</label>
            <input 
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={handleState}
                value={fecha}


            />
            <label>Hora</label>
            <input 
                type="time"
                name="hora"
                className="u-full-width"
                onChange={handleState}
                value={hora}


            />

            <textarea
                className="u-full-width"
                name="sintomas"
                onChange={handleState}
                value={sintomas}

                >

            </textarea>
            <button
            className="button submit u-full-width"
                type="submit"
            >Agregar Cita</button>
        </form>


    </Fragment>
     );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
  
export default Formulario;