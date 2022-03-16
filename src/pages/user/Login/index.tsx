import { memo } from 'react';
import styles from './index.module.scss';

const Index = memo(() => {
    return (
        <div className={styles.logo}>
            <h1>用户登录-页面</h1>
        </div>
    );
});

export default Index;
