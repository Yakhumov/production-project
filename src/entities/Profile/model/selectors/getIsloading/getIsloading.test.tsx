import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { getIsloading } from './getIsloading';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateShema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getIsloading(state as StateShema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getIsloading(state as StateShema)).toEqual(undefined);
    });
});
