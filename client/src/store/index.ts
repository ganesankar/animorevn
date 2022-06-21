import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
