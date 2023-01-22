import { createBrowserRouter } from 'react-router-dom';

import Blog from 'components/pages/Blog';
import BlogItem from 'components/pages/BlogItem';
import CatalogPage from 'components/pages/Catalog';
import Home from 'components/pages/Home';
import Product from 'components/pages/Product';
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
    {
        path: routes.Product,
        element: <Product />,
    },
    {
        path: routes.Catalog,
        element: <CatalogPage />,
    },
    {
        path: routes.Blog,
        element: <Blog />,
    },
    {
        path: routes.BlogItem,
        element: <BlogItem />,
    },
]);
