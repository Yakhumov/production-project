import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { getIsError } from './getIsError';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateShema> = {
            profile: {
                error: '123',
            },
        };
        expect(getIsError(state as StateShema)).toEqual('123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getIsError(state as StateShema)).toEqual(undefined);
    });
});
