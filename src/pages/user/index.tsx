import { memo } from 'react';
import {
    Outlet,
  } from 'react-router-dom';
import styles from './index.module.scss';

const Index =() => {
    return (
        <div className={styles.logo}>
            <h1>用户首页</h1>
            <Outlet />
        </div>
    );
}

export default Index;
