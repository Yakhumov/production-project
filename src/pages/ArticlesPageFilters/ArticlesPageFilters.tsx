import { Counter } from "entities/Counter";
import React from "react";
import { useTranslation } from "react-i18next";
import cls from "./ArticlesPageFilters.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleSort, ArticleViewSelector } from "entities/Article";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  ArticleSortField,
  ArticleType,
  ArticleView,
} from "entities/Article/model/types/article";
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
  getArticlePageView,
} from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { articlesPageActions } from "pages/ArticlesPage/model/slices/ArticlePageSlice";
import { Select } from "shared/ui/Select";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input";
import { SortOrder } from "shared/types";
import { fetchArticles } from "pages/ArticlesPage/model/services/fetchArticles";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { ArticleTypeTabs } from "entities/Article/ui/ArtilceTypesTabs/ArtilceTypesTabs";

interface ArticlePageFiltersProps {
  className?: string;
}

const ArticlePageFilters: React.FC<ArticlePageFiltersProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const view = useSelector(getArticlePageView);
  const dispatch = useAppDispatch();
  const sort = useSelector(getArticlePageSort);
  const order = useSelector(getArticlePageOrder);
  const search = useSelector(getArticlePageSearch);
  const type = useSelector(getArticlePageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, []);

  const fetchDebounceData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const onChangesort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onchangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onchangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      fetchDebounceData();
    },
    [dispatch, fetchDebounceData]
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageActions.setType(value));
      dispatch(articlesPageActions.setPage(1));
      fetchDebounceData();
    },
    [dispatch, fetchDebounceData]
  );

  return (
    <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSort
          sort={sort}
          order={order}
          onchangeOrder={onchangeOrder}
          onchangeSort={onChangesort}
        />
   
      <ArticleViewSelector view={view}
       onViewClick={onChangeView} />
          </div>       
      <Card className={cls.search}>
        <Input
          value={search}
          placeholder={t("Поиск")}
          onChange={onchangeSearch}
        />
      </Card>
      <ArticleTypeTabs
        onChangeType={onChangeType}
        value={type}
        className={cls.cartTabs}
      />
    </div>
  );
};

export default ArticlePageFilters;
