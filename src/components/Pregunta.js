import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ( { setPresupuesto, setRestante, setMostrarPregunta } ) => {

    const [cantidad, setCantidad] = useState(0);

    const [error, setError] = useState(false);

    const definirPresupuesto = (e) =>{
        // console.log(parseInt(e.target.value));
        setCantidad(parseInt(e.target.value, 10));

    }

    const agregarPresupuesto = (e) =>{
        e.preventDefault();
         //Validar
        if( cantidad < 1 || isNaN(cantidad) ){
            // console.log('Error...');
            setError(true);
            return;
        }
        //Si pasa la validación
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);

    }

    return (
        <div>
            <h2>Coloca tu presupuesto</h2>
            {
                error ? <Error mensaje="El Presupuesto es Incorrecto."/> : null
            }
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}

                />
                <input 
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir presupuesto"
                    
                />
            </form>
        
        </div>
    )
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarPregunta: PropTypes.func.isRequired,
}

export default Pregunta
