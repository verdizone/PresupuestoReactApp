import React from 'react'
import revisarPresupuesto from '../helpers/revisarPresupuesto';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return (
        <>
            <div className="alert alert-primary">
                <p>Presupuesto: ${presupuesto}</p>
            </div>
            <div className= {revisarPresupuesto(presupuesto, restante)} >
                <p>Restante: ${restante}</p>
            </div>
        </>
    )
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
}

export default ControlPresupuesto
