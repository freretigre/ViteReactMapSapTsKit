import { memo } from 'react';
import styles from './index.module.scss';

const Index = memo(() => {
    return (
        <div className={styles.analysis}>
            <h1>analysis-分析页</h1>
        </div>
    );
});

export default Index;
