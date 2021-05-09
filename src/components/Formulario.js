import React, { useState } from 'react'
import shortid from 'shortid';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ( {setGasto, setCrearGasto} ) => {
    
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = (e) =>{
        e.preventDefault();
                
        //Validar 

        if( 
            cantidad < 1 
            || isNaN(cantidad) 
            || nombre.trim() === 0 
            || nombre.trim().length <= 0 
            ){
              setError(true);
              return;
            }
        setError(false);

        //Contruir el gasto = OBJ
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate(),
        }

        //Pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);

        //Resetear el form
        setNombre('');
        setCantidad('');

    }

    return (
        <div>
            <form 
                onSubmit={agregarGasto}            
            >

                <h2>Agrega tus gastos aquí</h2>
                {
                    error ? <Error mensaje="La cantidad ingresada es inválida o no se colocó el nombre del gasto."/> : null
                }
                <div className="campo">
                    <label htmlFor="nombreGasto">
                        Nombre Gasto
                    </label>
                    <input 
                        type="text"
                        name="nombreGasto" 
                        id="nombreGasto"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        value={nombre}
                        onChange={(e) =>setNombre(e.target.value)}
                    />
                    <label htmlFor="cantidadGasto">
                        Cantidad Gasto
                    </label>
                    <input 
                        type="number"
                        name="cantidadGasto" 
                        id="cantidadGasto"
                        className="u-full-width"
                        placeholder="Ej. 100"
                        value={cantidad}
                        onChange={(e) =>setCantidad( parseInt(e.target.value, 10) )}
                    />
                    <input 
                        type="submit"
                        className="u-full-width button-primary"
                        value="Agregar Gasto"
                    />


                </div>
            </form>
        </div>
    )
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired,
}

export default Formulario
