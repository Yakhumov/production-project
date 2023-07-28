import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { getProfileForm } from './getProfileForm';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

describe('getProfileForm.test', () => {
    test('should return error', () => {

        const data = {
            first: 'Jahar',
            lastname: 'Yakumov',
            age: 27,
            city: "Grozny",
            country: Country.Russia,
            currency: Currency.RUB
        }

        const state: DeepPartial<StateShema> = {
            profile: {
             form: data
            },
        };
        expect(getProfileForm(state as StateShema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getProfileForm(state as StateShema)).toEqual(undefined);
    });
});
