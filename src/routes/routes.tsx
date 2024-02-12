import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login';
import SignUp from '../pages/SignUp';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/criar-usuario',
        element: <SignUp />,
    },

])

