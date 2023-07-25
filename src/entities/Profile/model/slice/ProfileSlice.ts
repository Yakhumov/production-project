import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileShema } from 'entities/Profile/types/Profile';
import { fetchProfileData } from '../services/fetchProfileData';

const initialState: ProfileShema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true
};

export const ProfileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined; 
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state,action: PayloadAction<Profile>) => {
                state.isLoading = false; 
                state.data = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: ProfileActions } = ProfileSlice; 
export const { reducer: ProfileReducer } = ProfileSlice;


  
