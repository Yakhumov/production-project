import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModelLoader/DynamicModelLoader";
import { useInitialEffect } from "shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticles } from "../model/services/fetchArticles";
import {
  articlesPageActions,
  getArticle,
} from "../model/slices/ArticlePageSlice";
import { articlesPageReducer } from "../model/slices/ArticlePageSlice";
import cls from "./ArticlesPage.module.scss";
import {
  getArticlePage,
  getArticlePageError,
  getArticlePageHasmore,
  getArticlePageIsLoading,
  getArticlePageView,
} from "../model/selectors/articlesPageSelectors";
import { ArticleViewSelector } from "entities/Article";
import { ArticleView } from "entities/Article/model/types/article";
import { Page } from "shared/ui/Page/Page";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticle.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getArticlePageView);
  const error = useSelector(getArticlePageError);
  const page = useSelector(getArticlePage);
  const hasmore = useSelector(getArticlePageHasmore);

  const onLoadNextPart = useCallback(() => {
    if (hasmore && isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(
        fetchArticles({
          page: page + 1,
        })
      );
    }
  }, [page, hasmore,isLoading]);

  useInitialEffect(() => {
    dispatch(
      fetchArticles({
        page: 1,
      })
    );
    dispatch(articlesPageActions.initState());
  });

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
