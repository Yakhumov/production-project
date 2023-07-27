import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/ThemeProviders';
import { Profile } from 'entities/Profile/types/Profile';
import { getProfileForm } from '../selectors/getProfileForm/getProfileForm';



export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'edit/editProfileData',
    async (_, thunkApi) => {
        
        const { extra,  rejectWithValue, getState } = thunkApi;
        const formData = getProfileForm(getState())     
        try {
            const response = await extra.api.put<Profile>('/profile',formData); 

            // throw new Error()  
            return response.data  
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
