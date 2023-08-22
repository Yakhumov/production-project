import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { getProfileIsloading } from './getIsloading';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateShema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsloading(state as StateShema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getProfileIsloading(state as StateShema)).toEqual(undefined);
    });
});
