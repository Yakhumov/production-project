import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleDetails } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import cls from "./ArticlesDetailsPage.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModelLoader/DynamicModelLoader";
import CommentList from "entities/Comment/ui/CommentList/CommentList";
import { Text } from "shared/ui/Text";
import { useInitialEffect } from "shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentArticleById/fetchCommentArticleById";
import { useSelector } from "react-redux";
import { CommentsIsLoading } from "../model/selectors/Comments";
import { getArticleComments } from "../model/slice/ArticleDetailsComments.slice";
import { addCommentForArticle } from "../model/services/addCommentForm/AddCommentForm";
import { CommentForm } from "features/addCommentForm";
import { Button } from "shared/ui/Button";
import { ThemeButton } from "shared/ui/Button/Button";
import { RouterPath } from "shared/config/RouterConfig/routerConfig";
import { Page } from "shared/ui/Page/Page";
import { articleDetailsPageReducer } from "../model/slice";
import { getArticleRecommendations } from "../model/slice/articleDetailsPageRecommendationsSlice";
import { getArticleRecommendationsIsLoading } from "../model/selectors/Recomendation";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { fetchArticleRecommendations } from "../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { ArticleDetailsPageHeader } from "..";
import { VStack } from "shared/ui/Stack";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation("article-details");
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const commentIsLoading = useSelector(CommentsIsLoading);
  const recomendation = useSelector(getArticleRecommendations.selectAll);
  const recomendationIsloading = useSelector(
    getArticleRecommendationsIsLoading
  );
  const comments = useSelector(getArticleComments.selectAll);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap="16">
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <Text className={cls.recomendation} title={t("Рекомендуем")} />
          <ArticleList
            target="_blank"
            articles={recomendation}
            isLoading={recomendationIsloading}
          />
          <Text className={cls.commentTitle} title={t("Комментарии")} />
          <CommentForm onSendComment={onSendComment} />
          <CommentList isLoading={commentIsLoading} comments={comments} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
