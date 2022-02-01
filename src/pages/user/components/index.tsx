import { memo, FC, PropsWithChildren, Suspense, lazy } from 'react';
import { 
    Route,
    Routes,
    NavigateFunction,
    BrowserRouter,
    useNavigate
  } from 'react-router-dom';
import styles from './index.module.scss';

const Index = memo(() => {
    return (
        <div className={styles.logo}>
            <h1>用户首页</h1>
        </div>
    );
});

export default Index;
