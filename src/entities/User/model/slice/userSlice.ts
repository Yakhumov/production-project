import { createSlice } from '@reduxjs/toolkit';
import { userShema } from '../types/user';

const initialState: userShema ={}
  

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice; 
export const { reducer: userReducer } = userSlice;


  
