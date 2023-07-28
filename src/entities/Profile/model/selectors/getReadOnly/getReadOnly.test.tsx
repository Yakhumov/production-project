import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { getReadOnly } from './getReadOnly';


describe('getReadOnly.test', () => {
    test('should return error', () => {

     

        const state: DeepPartial<StateShema> = {
            profile: {
               readonly: true
            },
        };
        expect(getReadOnly(state as StateShema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getReadOnly(state as StateShema)).toEqual(undefined);
    });
});
