import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from './components/header';
import Body from './components/body';
import About from './components/about';
import Contact from './components/contact';
import Error from './components/error';
import ResMenu from './components/res-menu';


const AppLayout=()=>{
    return (
        <div className="appLayout">
            <Header/>
            <Outlet />
        </div>
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
        errorElement : <Error/>,
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
                path: '/restaurants/:resID',
                element : <ResMenu />,
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
//root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />)

