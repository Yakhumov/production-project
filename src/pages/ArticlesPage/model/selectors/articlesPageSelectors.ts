import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema";
import { ArticleView } from "entities/Article/model/types/article";

export const getArticlePageIsLoading = (state: StateShema) => state.articlesPage?.isLoading || false
export const getArticlePageError = (state: StateShema) => state.articlesPage?.error
export const getArticlePageView = (state: StateShema) => state.articlesPage?.view || ArticleView.SMALL  
export const getArticlePage = (state: StateShema) => state.articlesPage?.page || 1
export const getArticlePageLimit = (state: StateShema) => state.articlesPage?.limit || 9
export const getArticlePageHasmore = (state: StateShema) => state.articlesPage?.hasMore 





