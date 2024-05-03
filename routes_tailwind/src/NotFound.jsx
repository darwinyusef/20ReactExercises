import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './components/Button';

const NotFound = () => {
    return (
        <div className='w-full h-full flex justify-center items-center flex-col'>
            <div className='my-10 text-5xl font-bold text-center'>Página no encontrada</div>
            <Link to="/"><Button title="enviar" color="bg-red-500" /></Link>
        </div>
    )
}

export default NotFound