import React, { memo, useEffect, useRef } from 'react'
import styles from './index.module.scss';

export default memo(() => {
    const mediaRef: any = useRef(null);
    useEffect(() => {
        if(typeof mediaRef.current.pause === 'function'){
            mediaRef.current.play();
        }else{
            mediaRef.current.play();
        }
    }, []);

    return (
        <div className={styles.normal}>
            <div className="content"></div>
            <video 
                ref={mediaRef}
                className="background"
                playsInline
                autoPlay
                muted 
                loop
            >
                <source src="https://static.frontendmasters.com/assets/fm/med/home/hero.mp4" type="video/mp4" />
            </video>
        </div>
    );
});
