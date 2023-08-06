import { Counter } from "entities/Counter";
import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Comment } from "entities/Comment/model/types/comments";
import CommentCard from "../CommentCard/CommentCard";
import { Text } from "shared/ui/Text";
import cls from './CommentList.module.scss'

interface CommentListProps {
  className?: string;
  isLoading?: boolean
  comments: Comment[] 
}

const CommentList: React.FC<CommentListProps> = (props) => {
  const { className, isLoading,comments } = props;
  const { t } = useTranslation();



  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
    {comments?.length
        ? comments.map((comment) => (
            <CommentCard
                isLoading={isLoading}
                className={cls.comment}
                comment={comment}
            />
        ))
        : <Text text={t('Комментарии отсутствуют')} />}
</div>
  );
};

export default memo(CommentList);
