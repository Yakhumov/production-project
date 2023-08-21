import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { userArticleRecommendationsList } from 'features/articleRecommendationsList/api/ArticleRecommendationsList';


interface ArticleRecommendationsListProps {
    className?: string;
}



export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articles  } = userArticleRecommendationsList(3) 

    console.log(articles)
    
    return (
        <div className={classNames('', {}, [className])}>
               <Text className={''} title={t("Рекомендуем")} />
          <ArticleList 
            target="_blank"
            articles={articles}
          />
        </div>
    );
});