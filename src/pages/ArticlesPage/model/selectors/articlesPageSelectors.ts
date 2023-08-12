import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema";
import { ArticleSortField, ArticleType, ArticleView } from "entities/Article/model/types/article";

export const getArticlePageIsLoading = (state: StateShema) => state.articlesPage?.isLoading || false
export const getArticlePageError = (state: StateShema) => state.articlesPage?.error
export const getArticlePageView = (state: StateShema) => state.articlesPage?.view || ArticleView.SMALL  
export const getArticlePage = (state: StateShema) => state.articlesPage?.page || 1
export const getArticlePageLimit = (state: StateShema) => state.articlesPage?.limit || 9
export const getArticlePageHasmore = (state: StateShema) => state.articlesPage?.hasMore 
export const getArticlePageInited = (state: StateShema) => state.articlesPage?._inited
export const getArticlePageSort = (state: StateShema) => state.articlesPage?.sort ?? ArticleSortField.CREATED
export const getArticlePageOrder = (state: StateShema) => state.articlesPage?.order ?? 'asc'
export const getArticlePageSearch = (state: StateShema) => state.articlesPage?.search ?? ''  
export const getArticlePageType = (state: StateShema) => state.articlesPage?.type ?? ArticleType.ALL








