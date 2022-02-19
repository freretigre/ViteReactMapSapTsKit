import React, { memo } from 'react'
import styles from './index.module.scss';

export default memo(() => {
    return (
        <div className={styles.normal}>
            <div className="content"></div>
            <video className="background" playsInline autoPlay  muted loop><source src="https://static.frontendmasters.com/assets/fm/med/home/hero.mp4" type="video/mp4" /></video>
        </div>
    );
});
