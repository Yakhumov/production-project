import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { User, userActions } from 'entities/User';
import { LOCALSTORAGE_USER_KEY } from 'shared/consts/LocalStorageUser';
import { ThunkConfig } from 'app/providers/ThemeProviders';
import { Profile } from 'entities/Profile/types/Profile';



export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'fetch/profileData',
    async (_, thunkApi) => {
        const { extra,  rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Profile>('/profile'); 
            return response.data 
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
