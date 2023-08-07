import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestasyncThunc/TestAsyncThunc';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';
import { fetchProfileData } from './fetchProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'jahar',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');  
    });
});
