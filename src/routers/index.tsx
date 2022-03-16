import {memo, FC, PropsWithChildren, lazy} from 'react';
import type { RouteObject } from "react-router-dom";
import { BrowserRouter, Outlet, Link, useRoutes, useParams } from "react-router-dom";

import User from'../pages/user';
import Login from'../pages/user/Login';
import Reg from'../pages/user/Register';
import Analysis from'../pages/analysis';
import NoMatch from'../pages/noMatch';
import Layouts from'../layouts';


const RouterRoot = () => {
    let routes: RouteObject[] = [
        {
            path: "/",
            element: <Layouts />,
            children: [
                {
                    index: true,
                    element: <Analysis />
                },
                {
                    path: "/user",
                    element: <User />,
                    children: [
                        {
                            path: "/user/login",
                            element: <Login /> },
                        {
                            path: "/user/reg",
                            element: <Reg />
                        }
                    ]
                },
                {
                    path: "*",
                    element: <NoMatch />
                }
            ]
        }
    ];
    return useRoutes(routes);
};




export const Routers = memo(() => {
    return (
        <BrowserRouter>
            <RouterRoot />
        </BrowserRouter>
    );
});




