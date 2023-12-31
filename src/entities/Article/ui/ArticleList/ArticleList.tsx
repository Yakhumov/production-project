import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { Text } from 'shared/ui/Text';
import { HTMLAttributeAnchorTarget } from 'react';

interface ArticleListProps {
    className?: string;
    articles: Article[] 
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget
}



const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />  
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        target,
        view = ArticleView.SMALL,
        isLoading,
    } = props;
    const { t } = useTranslation();


    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text  title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div  className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        data-testid={'ArticleList'}
        >
            {articles.length > 0
                ? articles.map(renderArticle) 
                : null}
                {isLoading && getSkeletons(view)}
                
        </div> 
    );
});

