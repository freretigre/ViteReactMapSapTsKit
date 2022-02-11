import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootSlices } from "../slices";
import rootSaga from "../sagas";

export const configureRootStore: any = () => {
    const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();
    const middlewares = [sagaMiddleware, thunk, logger];
    const middleware = [
        ...middlewares,
    ];
    const store = configureStore({
        reducer: {
            counter: rootSlices.reducer,
        },
        middleware: middleware,
        devTools: true,
    });

    sagaMiddleware.run(rootSaga);
    return store;
};

export const rootStore = configureRootStore();

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;