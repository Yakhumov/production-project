import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from 'shared/config/RouterConfig/routerConfig';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from 'pages/ArticlesPageDetalis/model/selectors/Article';
import { HStack } from 'shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    // const canEdit = useSelector(getCanEditArticle)
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RouterPath.articles);
    }, [navigate]);


    const onBackToEdit = useCallback(()=>{
        navigate(`${RouterPath.article_details}${article?.id}/edit`);
    },[article?.id,navigate])
 

    return (
        <HStack  justify='between' max  className={classNames('', {}, [className])}>
            <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            
                <Button
                    theme={ThemeButton.OUTLINE}
                    onClick={onBackToEdit}
                >
                    {t('Редактировать')}
                </Button>
        </HStack>
    );
});
