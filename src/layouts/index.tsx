import { memo, FC, PropsWithChildren, Suspense, lazy } from 'react';
import {
    Link,
    Outlet,
  } from 'react-router-dom';

const Layout = memo(() => {
    return (
        <div>
            <div>
                <h1>头部</h1>
                <p><Link to="/">aa</Link></p>
            </div>
            <Outlet />
            <div><h1>底部</h1></div>
        </div>
    )
});

export default Layout;