import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';


function App() {
  if (localStorage.getItem('login') == 'logueado') {
    return (
      <BrowserRouter>
        <>
          {/* Generar el menú a las rutas configuradas*/}
          <nav className='mt-10'>
            <ul className='flex justify-center gap-3'>
              <li className='p-2 bg-slate-400 rounded-lg'><Link to="/">Inicio</Link></li>
              <li className='p-2 bg-slate-400 rounded-lg'><Link to="/about">Acerca de</Link></li>
              <li className='p-2 bg-slate-400 rounded-lg'><Link to="/contact">Contacto</Link></li>
            </ul>
          </nav>

          {/* Configuración de react router por componente*/}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      </BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter >
    )
  }

}

export default App
