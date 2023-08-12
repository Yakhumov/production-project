import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/ThemeProviders";
import { Comment } from "entities/Comment";
import { Article } from "entities/Article";
import {
  getArticlePage,
  getArticlePageLimit,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
} from "../selectors/articlesPageSelectors";
import { ArticleType } from "entities/Article/model/types/article";
import { addQueryParams } from "shared/lib/url/addQueryParams";

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const limit = getArticlePageLimit(getState());
  const page = getArticlePage(getState());
  const order = getArticlePageOrder(getState());
  const sort = getArticlePageSort(getState());
  const search = getArticlePageSearch(getState());
  const type = getArticlePageType(getState());

  try {
    addQueryParams({
        sort, order, search, type,
    });
    const response = await extra.api.get<Article[]>("/articles", {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page,
        _order: order,
        _sort: sort,
        q: search,
        _type: type === ArticleType.ALL ? undefined : type,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue("error");
  }
});
