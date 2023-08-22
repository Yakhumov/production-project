import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { getProfileReadOnly } from './getReadOnly';


describe('getReadOnly.test', () => {
    test('should return error', () => {

     

        const state: DeepPartial<StateShema> = {
            profile: {
               readonly: true
            },
        };
        expect(getProfileReadOnly(state as StateShema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getProfileReadOnly(state as StateShema)).toEqual(undefined);
    });
});
