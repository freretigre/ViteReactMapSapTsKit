import { memo } from 'react';
import styles from './index.module.scss';

const Index = memo(() => {
    return (
        <div className={styles.reg}>
            <h1>用户注册-页面</h1>
        </div>
    );
});

export default Index;
