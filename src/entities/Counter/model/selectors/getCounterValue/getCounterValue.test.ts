import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('return ', () => {
        const state: DeepPartial<StateShema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateShema)).toEqual(10);     
    });
});
