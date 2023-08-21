import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LOCALSTORAGE_USER_KEY } from 'shared/consts/LocalStorageUser';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(LOCALSTORAGE_USER_KEY) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({}),  
});
