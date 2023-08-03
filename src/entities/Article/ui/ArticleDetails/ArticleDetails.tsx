import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading,} from "../../model/selectors/ArticleDetails";
import { Text } from "shared/ui/Text";
import { TextAlign } from "shared/ui/Text/ui/Text";
import { Skeleton } from "shared/ui/Skeleton";
import cls from "./ArticleDetails.module.scss";
import { Avatar } from "shared/ui/Avatar/ui";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModelLoader/DynamicModelLoader";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/eye-20-20.svg";
import CalendarIcon from "shared/assets/icons/calendar-20-20.svg";
import { ArticleBlock } from "entities/Article/model/types/article";
import { ArticleBlockType } from "entities/Article/model/types/article";
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "./ArticleTextBlockComponent/ArticleTextBlockComponent";

export interface ArticleDetailsProps {
  className?: string;
  id: string;

}

const redusers: ReducersList = {
     articleDetails: articleDetailsReducer
}

 export const ArticleDetails: React.FC<ArticleDetailsProps> = (props) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);
  const isLoading = useSelector(getArticleDetailsIsLoading);  
  

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
        return (
            <ArticleCodeBlockComponent
             block={block}
            />
        );
    case ArticleBlockType.IMAGE:
        return (
            <ArticleImageBlockComponent
               block={block}
            />
        );
    case ArticleBlockType.TEXT:
        return (
            <ArticleTextBlockComponent
               block={block}
            />
        );
    default:
        return null;
    }
}, []);
         

  useEffect(() => {
    dispatch(fetchArticleById(id));       
  }, [id]); 

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton key="avatar" className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton key="title" className={cls.title} width={300} height={32} />
        <Skeleton key="skeleton1" className={cls.skeleton} width={600} height={24} />
        <Skeleton key="skeleton2" className={cls.skeleton} width="100%" height={200} />
        <Skeleton key="skeleton3" className={cls.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text align={TextAlign.CENTER} title={t("Произошла ошибка при загрузке статьи.")} />  
    );
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={cls.avatar} />
        </div>
        <Text className={cls.title} title={article?.title} text={article?.subtitle} />
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={CalendarIcon} />         
          <Text text={article?.createdAt} />
        </div> 
        {article?.blocks.map(renderBlock)}  
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>         
  );
};         
