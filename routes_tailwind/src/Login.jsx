import { React, useState, useEffect } from 'react'
import { redirect } from "react-router-dom";
import textCamara from '/camara.jpg'
import logoCamara from '/logoCamara.jpg'
import './login.css'


const Login = () => {
    if (localStorage.getItem('login') == 'logueado') {
        window.location = "/about"
    }
    const [formData, setFormData] = useState({});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/MesaDavisEnterprises/API_URL/main/USERS_DATA.json")
            .then((response) => response.json())
            .then((res) => {
                let info = res.filter((r) => {
                    let char = "T1 ";
                    if (String(r.user_name).search(char) != -1) {
                        return r
                    }
                })
                setUsers(info)
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior

        const dataToSubmit = {
            ...formData // Any additional form data object here
        };

        const vEmail = validateEmail(dataToSubmit.email);
        let email = "";
        try {
            if (!vEmail) {
                email = null;
                const exception = new ExceptionOnly("El email no es valido", "EmailException");
                throw exception;
            }
        } catch (e) {
            console.log('El formato de email no es valido');
        }
        // si no hay error el email pasa y se carga para validación de la api de lo contrario detiene el proceso
        if (email == null) {
            return;
        }

        try {
            email = vEmail[0]
            let findEmail = users.find((res) => {
                return res.email == email && res.password == dataToSubmit.password
            });
            if (findEmail === 'undefined') {
                const exception = new ExceptionOnly("El usuario no ha sidio encontrado", "FoundException");
                throw exception;
            } else {
                localStorage.setItem('login', 'logueado');
                console.log('aqui lo que sigue');
                window.location = "/about"
            }

        } catch (e) {
            console.log(e, 'Error al encontrar el usuario usuario');
        }

    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleInputChange = (event) => {
        const { target } = event;
        console.log(target);
        const { name, value } = target;
        setFormData({
            ...formData, // Keep existing form data
            [name]: value // Update form data for the input field that changed
        });
    }

    function ExceptionOnly(mensaje, name) {
        this.mensaje = mensaje;
        this.nombre = name;
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