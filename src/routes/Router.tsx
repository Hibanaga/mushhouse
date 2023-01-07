import { createBrowserRouter } from 'react-router-dom';

import Home from 'components/pages/Home';
import ShoppingCart from 'components/pages/ShoppingCart';

import routes from './routes';


export default createBrowserRouter([
    {
        path: routes.Home,
        element: <Home />,
    },
    {
        path: routes.ShoppingCart,
        element: <ShoppingCart />,
    },
]);
