import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from 'features/authUser';
import { getArticleDetailsData } from 'entities/Article';

export const getCanEditArticle = createSelector(
    getArticleDetailsData,
    getAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);
