import React from 'react'
import textCamara from '/camara.jpg'
import logoCamara from '/logoCamara.jpg'
import './login.css'
import { useState } from 'react'


const Login = () => {
    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior

        const dataToSubmit = {
            ...formData // Any additional form data object here
        };
        console.log(dataToSubmit);

        // history.push('/my-new-page'); // Redirect to new page
    }

    const handleInputChange = (event) => {
        const { target } = event;
        console.log(target);
        const { name, value } = target;


        setFormData({
            ...formData, // Keep existing form data
            [name]: value // Update form data for the input field that changed
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    {/*puedes agregar la clase general-error*/}
                    <div className="login">
                        <div className="logo">
                            <img src={logoCamara} alt="" />
                            <img src={textCamara} alt="" />
                        </div>
                        {/*puedes agregar la clase error*/}
                        <div className="input">
                            <label>Email</label>
                            <input type="text" name="email" placeholder='Escriba su email' onChange={handleInputChange} />
                            <p className='hidden'>Error: email no encontrado</p>
                        </div>
                        {/*puedes agregar la clase error*/}
                        <div className="input">
                            <label>Password</label>
                            <input type="password" name="password" placeholder='Escriba su password' onChange={handleInputChange} />
                            <p className='hidden'>Error: login no encontrado</p>
                        </div>

                        <button type="submit" className='btn-login'>Ingresar</button>

                        <div className="loginFooter">
                            <span>Registrarse</span>
                            <span>Recuperar Contraseña</span>
                        </div>
                    </div>
                </div>
            </form>
        </>


    )
}

export default Login