import { RatingCard } from "entities/Rating";
import {
  useArticleRate,
  useArticleRating,
} from "features/articleRating/api/articleRatingApi";
import { getAuthData } from "features/authUser";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Skeleton } from "shared/ui/Skeleton";

export interface ArticleRatingProps {
  articleId: string;
  className?: string;
}

 const ArticleRating: React.FC<ArticleRatingProps> = (props) => {
  const { className, articleId } = props;
  const { t } = useTranslation();

  const userData = useSelector(getAuthData);

  const { data, isLoading } = useArticleRating({
    articleId,
    userId: userData?.id ?? "",
  });

  const [rateArticleMutation] = useArticleRate({});

  const handleRate = useCallback((starsCount: number, feedback?: string)=>{
    try{   
      rateArticleMutation({ 
        userId: userData?.id ?? '',
        articleId,
        rate: starsCount,
        feedback, 
      })
    }catch(e){
      console.log(e) 
    }
  },[userData,articleId, userData?.id]) 

  const onAccept = useCallback((starsCount: number, feedback?: string) =>{
    handleRate(starsCount,feedback)
  },[handleRate]) 

  const onCancel = useCallback((starsCount: number) =>{ 
    handleRate(starsCount)  
  },[handleRate]) 

  if (isLoading) {
    return <Skeleton width="100%" height="130%" />;
  }

  const rating = data?.[0];

  return (
    <RatingCard 
      onAccept={onAccept} 
      onCancel={onCancel}
      rate={rating?.rate}
      title={t("Оцените статью")}
      feedbackTitle={t(
        "Оставьте свой отзыв о статье, это поможет улучшить качество"
      )}
      hasFeedback
    ></RatingCard>
  );
};

export default ArticleRating