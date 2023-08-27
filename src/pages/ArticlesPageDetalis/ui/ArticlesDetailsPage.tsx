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
import { Page } from "shared/ui/Page/Page";
import { articleDetailsPageReducer } from "../model/slice";
import { ArticleDetailsPageHeader } from "..";
import { VStack } from "shared/ui/Stack";
import { ArticleRecommendationsList } from "features/articleRecommendationsList";
import { ArticleDetailsComments } from "./ArticleDetailsComments/ArticleDetailsComments";
import { ArticleRating } from "features/articleRating";

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
          <ArticleRating  articleId={id}/>  
          <ArticleRecommendationsList />
          <ArticleDetailsComments  id={id}/> 
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
