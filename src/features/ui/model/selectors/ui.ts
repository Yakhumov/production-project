import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { createSelector } from '@reduxjs/toolkit';

export const getUIScroll = (state: StateShema) => state.ui.scroll;

export const getUIScrollByPath = createSelector(
    getUIScroll,
    (state: StateShema, path: string) => path,
    (scroll, path) => scroll[path] || 0,  
);
