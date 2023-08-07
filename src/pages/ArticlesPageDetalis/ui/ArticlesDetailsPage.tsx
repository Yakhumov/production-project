import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticlesDetailsPage.module.scss' 
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModelLoader/DynamicModelLoader';
import { articleDetailsCommentsReducer } from '../model/slice/ArticleDetailsComments.slice';
import CommentList from 'entities/Comment/ui/CommentList/CommentList';
import { Text } from 'shared/ui/Text';
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentArticleById/fetchCommentArticleById';
import { useSelector } from 'react-redux';
import { CommentsIsLoading } from '../model/selectors/Comments';
import { getArticleComments } from '../model/slice/ArticleDetailsComments.slice';
import { addCommentForArticle } from '../model/services/addCommentForm/AddCommentForm';
import { CommentForm } from 'features/addCommentForm';

interface ArticleDetailsPageProps {
    className?: string;
}


const reducers : ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details'); 
    const {id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch()
    const commentIsLoading = useSelector(CommentsIsLoading)
    const comments = useSelector(getArticleComments.selectAll);


    useInitialEffect(()=>{
        dispatch(fetchCommentsByArticleId(id))   
    })

    const onSendComment = useCallback((text:string)=>{
        dispatch(addCommentForArticle(text))    
    },[dispatch]) 


    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

 

    return (
       <DynamicModuleLoader reducers={reducers}removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />   
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <CommentForm onSendComment={onSendComment}/>
                <CommentList
                    isLoading={commentIsLoading}
                    comments={comments}      
                />
            </div>
       </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage); 
