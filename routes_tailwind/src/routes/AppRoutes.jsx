import { useRoutes } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Login from '../Login';
import BoardGame from '../BoardGame';
import NotFound from '../NotFound';

// cuando se quiere usar Routes / Route
{/*<Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/board" element={<BoardGame />} />
</Routes>*/}

const AppRoutes = () => {
    if (localStorage.getItem('login') == 'logueado') {
        return useRoutes([
            { path: "/", element: <Login /> },
            { path: "/home", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/board", element: <BoardGame /> },
            { path: "/*", element: <NotFound /> },
        ]);
    } else {
        return useRoutes([
            { path: "/", element: <Login /> },
            { path: "/*", element: <NotFound /> },
        ]);
    }
}

export default AppRoutes;