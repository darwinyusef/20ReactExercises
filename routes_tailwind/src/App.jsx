import { BrowserRouter, Link } from 'react-router-dom';

import './App.css'
import AppRoutes from './routes/AppRoutes';
import Links from './routes/Links'


function App() {
  return (
    <BrowserRouter>
      <>
        {/* Generar el menú a las rutas configuradas*/}
        <Links />
        {/* Configuración de react router por componente*/}
        <AppRoutes />
      </>
    </BrowserRouter>
  )


}

export default App
