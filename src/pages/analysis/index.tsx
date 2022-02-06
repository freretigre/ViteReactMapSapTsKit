import { memo } from 'react';
import SelectLang from '../../../src/components/SelectLang';
import styles from './index.module.scss';

const Index = memo(() => {
    return (
        <div className={styles.analysis}>
            <h1>analysis-分析页</h1>
            <SelectLang />
        </div>
    );
});

export default Index;
