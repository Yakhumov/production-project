import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './ArticleDetails'

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: DeepPartial<StateShema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateShema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getArticleDetailsData(state as StateShema)).toEqual(undefined);
    });
    test('should return error', () => {
        const state: DeepPartial<StateShema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateShema)).toEqual('error');
    });
    test('should work with empty state error', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getArticleDetailsError(state as StateShema)).toEqual(undefined);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateShema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateShema)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateShema> = {};
        expect(getArticleDetailsIsLoading(state as StateShema)).toEqual(false);
    });
});
