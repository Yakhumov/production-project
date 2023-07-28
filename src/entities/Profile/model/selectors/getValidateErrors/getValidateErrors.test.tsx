import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { ValidateProfileErrors } from 'entities/Profile';
import { validateProfileErrors } from './getValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateShema> = {
            profile: {
                validateErrors: [
                    ValidateProfileErrors.SERVER_ERROR,
                    ValidateProfileErrors.INCORRECT_AGE,
                ],
            },
        };
        expect(validateProfileErrors(state as StateShema)).toEqual([
            ValidateProfileErrors.SERVER_ERROR,
            ValidateProfileErrors.INCORRECT_AGE,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(validateProfileErrors(state as StateShema)).toEqual(undefined);
    });
});
