import { memo } from 'react';
import SelectLang from '../../../src/components/SelectLang';
import Counter from "../../components/Counter";
import Carousels from "../../components/Carousels";
import styles from './index.module.scss';

const Index = memo(() => {
    return (
        <div className={styles.analysis}>
            <h1>analysis-分析页</h1>
            <Carousels />
            <SelectLang />
            <div>
                <Counter />
            </div>
        </div>
    );
});

export default Index;
