import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import ResMenu from './components/ResMenu';

import { Provider } from 'react-redux';
import cartStore from './utils/redux_cart/cartStore';

const AppLayout=()=>{
    return (
        <Provider store={cartStore}>
        <div className="appLayout">
            <Header/>
            <Outlet />
        </div>
        </Provider>
    )
};

// const appRouter = createBrowserRouter([
//     {
//         path: '/',
//         element : <AppLayout/>,
//         errorElement : <Error/>
//     },
//     {
//         path: '/about',
//         element : <About/>,
//         errorElement : <Error/>
//     },
//     {
//         path: '/contact',
//         element : <Contact/>,
//         errorElement : <Error/>
//     }
// ])

const appRouter = createBrowserRouter([
    {
        path: '/',
        element : <AppLayout/>,
        children : [
            {
                path: '/',
                element : <Body />,
            },
            {
                path: '/about',
                element : <About/>,
            },
            {
                path: '/contact',
                element : <Contact/>,
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/restaurants/:resID',
                element : <ResMenu />,
            }
        ],
        errorElement : <Error/>,
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
//root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />)

