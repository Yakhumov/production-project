
import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Comment } from "entities/Comment/model/types/comments";
import { Text } from "shared/ui/Text";
import { VStack } from "shared/ui/Stack";
import CommentCard from "../CommentCard/CommentCard";

interface CommentListProps {
  className?: string;
  isLoading?: boolean
  comments: Comment[] 
}

const CommentList: React.FC<CommentListProps> = (props) => {
  const { className, isLoading,comments } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            <CommentCard isLoading />
            <CommentCard isLoading />
            <CommentCard isLoading />
        </VStack>
    );
}

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
    {comments?.length
        ? comments.map((comment) => (
            <CommentCard
                isLoading={isLoading}
                comment={comment}
                key={comment.id}
            />
        ))
        : <Text text={t('Комментарии отсутствуют')} />}
</VStack>
  );
};

export default memo(CommentList);
