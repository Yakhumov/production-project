import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/authUser';
import { UiShema } from '../types/ui';
import path from 'path';

const initialState: UiShema = {
    scroll: {}  
};

export const UiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
  
});

// Action creators are generated for each case reducer function
export const { actions: UIActions } = UiSlice;
export const { reducer: UIReducer } = UiSlice;

