import { memo, FC, PropsWithChildren, Suspense, lazy } from 'react';
import { 
    Outlet
  } from 'react-router-dom';

const Layouts = memo(() => {
    return (
        <>
            <div><h1>头部</h1></div>
            { Outlet}
            <div><h1>底部</h1></div>
        </>
    )
});

export default Layouts;