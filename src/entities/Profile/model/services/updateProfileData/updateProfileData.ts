import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/ThemeProviders';
import { Profile, ValidateProfileErrors } from 'entities/Profile/types/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateDateErrors/ValidateDataErrors';




export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileErrors[]>
>(
    'edit/editProfileData',
    async (_, thunkApi) => {
        
        const { extra,  rejectWithValue, getState } = thunkApi;
        const formData = getProfileForm(getState())     
        try {
            const response = await extra.api.put<Profile>('/profile',formData); 

            const errors = validateProfileData(formData)
            if(errors.length){
                return rejectWithValue(errors) 
            }
             
            return response.data  
        } catch (e) {
            console.log(e);
            return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
        }
    },
);
