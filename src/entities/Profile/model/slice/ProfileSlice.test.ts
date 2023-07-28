import {
    ProfileActions, ProfileReducer, ProfileShema, updateProfileData, ValidateProfileErrors,
} from 'entities/Profile';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';
const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileShema> = { readonly: false };
        expect(ProfileReducer(
            state as ProfileShema,
            ProfileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileShema> = { data, form: { username: '' } };

        expect(ProfileReducer(
            state as ProfileShema,
            ProfileActions.oncancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileShema> = { form: { username: '123' } };

        expect(ProfileReducer(
            state as ProfileShema,
            ProfileActions.editProfile({
                username: '123456',
            }),
        )).toEqual({
            form: { username: '123456' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileShema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        };

        expect(ProfileReducer(
            state as ProfileShema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileShema> = {
            isLoading: true,
        };

        expect(ProfileReducer(
            state as ProfileShema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
