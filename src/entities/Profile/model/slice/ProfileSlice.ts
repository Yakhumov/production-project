import { createSlice } from '@reduxjs/toolkit';
import { ProfileShema } from 'entities/Profile/types/Profile';

const initialState: ProfileShema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true
};

export const ProfileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
    },
});

export const { actions: ProfileActions } = ProfileSlice; 
export const { reducer: ProfileReducer } = ProfileSlice;


  
