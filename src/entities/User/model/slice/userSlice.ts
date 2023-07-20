import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, userShema } from '../types/user';
import { LOCALSTORAGE_USER_KEY } from 'shared/consts/LocalStorageUser';

const initialState: userShema ={}
  

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        authData: (state,action: PayloadAction<User>) =>{
            state.authData = action.payload        
        },

        initAuthData: (state) => {
            const user = localStorage.getItem(LOCALSTORAGE_USER_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            } 
        },

        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCALSTORAGE_USER_KEY);
        },
    },
});

export const { actions: userActions } = userSlice; 
export const { reducer: userReducer } = userSlice;


  
