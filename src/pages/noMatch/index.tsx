import { memo } from 'react';
import { Link } from "react-router-dom";
import styles from './index.module.scss';

const Index = memo(() => {
    return (
        <div className={styles.analysis}>
            <div>
                <h2>It looks like you're lost...</h2>
                <p>
                    <Link to="/">Go to the home page</Link>
                </p>
            </div>
        </div>
    );
});

export default Index;
