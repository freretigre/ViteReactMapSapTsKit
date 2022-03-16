import React, {memo} from 'react';
import { Button } from 'antd';
import { useAppSelector, useAppDispatch } from '../../models/hooks';
import { actions } from '../../models/actions';

import styles from "./index.module.scss";


const Index = memo(() => {
    const dispatch = useAppDispatch();
    const { decrement, increment, incrementByAmount } = actions;
    const count = useAppSelector((state) => state.counter.value );
    console.log("count:", count)
    return (
        <div className={styles.count}>
            <h1>以下是使用 最新的 Redux 处理数据</h1>
            <Button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </Button>
            <span>{count}</span>
            <Button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </Button>
        </div>
    );
})

export default Index;