import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { userActions } from "entities/User"
import { User } from "entities/User/model/types/user"
import { LOCALSTORAGE_USER_KEY } from "shared/consts/LocalStorageUser"

export interface LoginByuserNameProps {
    username: string,
    password: string
}

export const LoginByUsername = createAsyncThunk<User, LoginByuserNameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.authData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);

