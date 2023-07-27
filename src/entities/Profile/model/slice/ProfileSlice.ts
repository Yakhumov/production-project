import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileShema } from 'entities/Profile/types/Profile';
import { fetchProfileData } from '../services/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData';

const initialState: ProfileShema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true,
};

export const ProfileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        oncancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
        editProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: ProfileActions, reducer: ProfileReducer } = ProfileSlice; 

export const { setReadonly, oncancelEdit, editProfile } = ProfileActions;
export default ProfileReducer;
