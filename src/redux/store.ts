import { configureStore, createSerializableStateInvariantMiddleware, isPlain } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import modalReducer from "./features/modalSlice";
import alertReducer from "./features/alertSlice";
import toastReducer from "./features/toastSlice";
import chessReducer from "./features/chessSlice";
import scheduleReducer from "./features/scheduleSlice";
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { menuApi } from "./services/menuApi";


export const store = configureStore({
    reducer: {
        toastReducer,
        alertReducer,
        counterReducer,
        chessReducer,
        modalReducer,
        scheduleReducer,
        [userApi.reducerPath]: userApi.reducer,
        [menuApi.reducerPath]: menuApi.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat([userApi.middleware]).concat([menuApi.middleware])
    ,
});
setupListeners(store.dispatch); // refetchOnFocus Active

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;