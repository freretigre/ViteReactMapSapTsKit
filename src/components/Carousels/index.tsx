import React, {memo, FC} from 'react';
import { Carousel } from 'antd';
import { useAppSelector, useAppDispatch } from '../../models/hooks';
import { actions } from '../../models/actions';

import styles from "./index.module.scss";


const Index = memo(() => {
    const dispatch = useAppDispatch();
    const { decrement, increment, incrementByAmount } = actions;
    const count = useAppSelector((state) => state.counter.value );


    const contentStyle: object = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    console.log("count:", count)
    return (
        <div className={styles.count}>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    );
})

export default Index;