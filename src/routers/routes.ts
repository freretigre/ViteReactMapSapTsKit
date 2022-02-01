import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Login = lazy(() => import('../pages/user/Login'));
const Reg = lazy(() => import('../pages/user/Register'));
const Analysis = lazy(() => import('../pages/analysis'));
const NoMatch = lazy(() => import('../pages/noMatch'));
const Layout = lazy(() => import('../layouts'));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: Layout,
    children: [
      {
        index: true,
        path: '/analysis',
        element: Analysis
      },
      {
        path: "/user",
        children: [
          {
            index: true,
            path: "/user/login",
            element: Login
          },
          {
            index: true,
            path: "/user/reg",
            element: Reg
          }
        ]
      },
      {
        path: "*",
        element: NoMatch
      }
    ]
  },
];




