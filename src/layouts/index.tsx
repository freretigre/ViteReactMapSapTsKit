import { memo, FC, PropsWithChildren, Suspense, lazy } from 'react';
import {
    Link,
    Outlet,
} from 'react-router-dom';
import NavigationMenu from '../components/NavigationMenu';

const Layout = memo(() => {
    return (
        <>
            <NavigationMenu />
            <Outlet />
            <div><h1>底部</h1></div>
        </>
    )
});

export default Layout;