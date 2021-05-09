import React from 'react'

const Error = ({mensaje}) => {
    return (
        <div className="alert alert-danger error">
            <p> {mensaje} </p>
        </div>
    )
}

export default Error
