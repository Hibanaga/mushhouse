import { createBrowserRouter } from 'react-router-dom';

import Home from 'components/pages/Home';

import routes from './routes';


export default createBrowserRouter([
    {
        path: routes.Home,
        element: <Home />,
    },
]);
