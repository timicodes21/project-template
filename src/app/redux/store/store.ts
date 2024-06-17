import {configureStore} from '@reduxjs/toolkit';
import authRedux from '../slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authRedux,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
