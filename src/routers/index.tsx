import { memo, FC, PropsWithChildren } from 'react';
import { 
    BrowserRouter,
    useRoutes,
  } from 'react-router-dom';

import { routes } from './routes';
const Routers = memo(() => {
    let element = useRoutes(routes);
    return <BrowserRouter>{element}</BrowserRouter>
});

export default Routers;



