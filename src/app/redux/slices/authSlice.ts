import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface IAuthInitialState {
  isAuthenticated: boolean;
}

const initialState: IAuthInitialState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const {setIsAuthenticated} = authSlice.actions;

export default authSlice.reducer;
