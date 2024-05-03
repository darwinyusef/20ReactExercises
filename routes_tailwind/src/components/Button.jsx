import React from 'react'
import PropTypes from 'prop-types';


export const Button = ({ title = 'Enviar', color = "bg-gray-700" }) => {
    return (
        <div className={`max-w-[130px] text-center font-bold rounded-lg text-white p-3 ${color}`}>{title}</div>
    )
}

Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string
}
