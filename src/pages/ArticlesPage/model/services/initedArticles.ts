import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/ThemeProviders";
import { getArticlePageInited } from "../selectors/articlesPageSelectors";
import { articlesPageActions } from "../slices/ArticlePageSlice";
import { fetchArticles } from "./fetchArticles";
import { SortOrder } from "shared/types";
import { ArticleSortField } from "entities/Article/model/types/article";

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>("articlesPage/initArticlesPage", async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const inited = getArticlePageInited(getState());

  if (!inited) {
      const orderFromUrl = searchParams.get('order') as SortOrder
      const sortFromUrl = searchParams.get('sort') as ArticleSortField
      const searchFromUrl = searchParams.get('search') 

    if(orderFromUrl){
        dispatch(articlesPageActions.setOrder(orderFromUrl))
    }

    if(sortFromUrl){
        dispatch(articlesPageActions.setSort(sortFromUrl))
    }

    if(searchFromUrl){
        dispatch(articlesPageActions.setSearch(searchFromUrl))
    }

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticles({}));
  }
});
