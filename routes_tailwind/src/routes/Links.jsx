import React from 'react'
import { Link } from 'react-router-dom';

const Links = () => {
    const logout = () => {
        localStorage.removeItem('login');
        window.location = "/";
    }
    
    if (localStorage.getItem('login') == 'logueado') {
        return (
            <nav className='mt-10'>
                <ul className='flex justify-center gap-3'>
                    {/* <li className='p-2 bg-slate-400 rounded-lg'><Link to="/">Inicio</Link></li> */}
                    <li className='p-2 bg-slate-400 rounded-lg'><Link to="/home">Home</Link></li>
                    <li className='p-2 bg-slate-400 rounded-lg'><Link to="/about">Acerca de</Link></li>
                    <li className='p-2 bg-slate-400 rounded-lg'><Link to="/contact">Contacto</Link></li>
                    <li className='p-2 bg-slate-400 rounded-lg'><Link to="/board">Board</Link></li>
                    <li className='p-2 bg-slate-400 rounded-lg'><Link onClick={logout}>Logout</Link></li>
                </ul>
            </nav>
        );
    } else {
        return (
            <></>
        )
    }
}

export default Links