import React, { memo } from 'react'
import styles from './index.module.scss';

import icon_js from '../../assets/img/commone/icon_js.svg';
import icon_react from '../../assets/img/commone/icon_react.svg';
import icon_ts from '../../assets/img/commone/icon_ts.svg';
import icon_node from '../../assets/img/commone/icon_node.svg';
import icon_vue3 from '../../assets/img/commone/icon_vue3.svg';
import icon_angular from '../../assets/img/commone/icon_angular.svg';
import icon_css3 from '../../assets/img/commone/icon_css3.svg';
import icon_d3 from '../../assets/img/commone/icon_d3.svg';
import icon_webpack from '../../assets/img/commone/icon_webpack.svg';
import icon_vite from '../../assets/img/commone/icon_vite.svg';
import icon_esbuild from '../../assets/img/commone/icon_esbuild.svg';

interface WrapListIcons {
    id: number;
    name: string;
    icon: string;
}

export default memo(() => {
    const wrapListIcons: WrapListIcons[] = [
        {
            id: 1001,
            name: 'JS',
            icon: icon_js,
        },
        {
            id: 1002,
            name: 'React',
            icon: icon_react,
        },
        {
            id: 1003,
            name: 'TS',
            icon: icon_ts,
        },
        {
            id: 1004,
            name: 'Node',
            icon: icon_node,
        },
        {
            id: 1005,
            name: 'Vue3',
            icon: icon_vue3,
        },
        {
            id: 1006,
            name: 'Angular',
            icon: icon_angular,
        },
        {
            id: 1007,
            name: 'CSS3',
            icon: icon_css3,
        },
        {
            id: 1008,
            name: 'D3',
            icon: icon_d3,
        },
        {
            id: 1009,
            name: 'Webpack',
            icon: icon_webpack,
        },
        {
            id: 1010,
            name: 'Vite',
            icon: icon_vite,
        },
        {
            id: 1011,
            name: 'EsBuild',
            icon: icon_esbuild,
        },
    ];
    return (
        <div className={styles.normal}>
            <div className='wrap'>
                {wrapListIcons.map(item => {
                    return (<i key={item.id} className='icon'><img src={item.icon} /></i>);
                })}
            </div>
        </div>
    );
});
