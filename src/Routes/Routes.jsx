import React from 'react';
import { createBrowserRouter} from "react-router";
import Root from '../components/pages/Root/Root';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import Home from '../components/pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path:"/",
            Component:Home,
        }
    ]
  },
]);