import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootSlices } from "../slices";

export const store = configureStore({
    reducer: {
        counter: rootSlices.reducer,
    },
    middleware: [thunk, logger] as const,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;