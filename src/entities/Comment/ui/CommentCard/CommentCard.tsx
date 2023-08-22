import { Counter } from "entities/Counter";
import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './CommentCard.module.scss'
import { memo } from "react";
import { Comment } from "entities/Comment/model/types/comments";
import { Skeleton } from "shared/ui/Skeleton";
import { Avatar } from "shared/ui/Avatar/ui";
import { Text } from "shared/ui/Text";
import { AppLink } from "shared/ui/Applink/AppLink";
import { RouterPath } from "shared/config/RouterConfig/routerConfig";
import { HStack, VStack } from "shared/ui/Stack";

interface CommentCardProps {
  className?: string;
  isLoading?: boolean
  comment?: Comment 
}

const CommentCard: React.FC<CommentCardProps> = (props) => {
  const { className, isLoading,comment } = props;      
  const { t } = useTranslation();


  
  if (isLoading) {
    return (
        <VStack gap="16" max className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`{RouterPath.profile}${comment?.user.id}`} className={cls.header}>
                <Skeleton width={30} height={30} border="50%" />
                <Skeleton height={16} width={100} className={cls.username} />
            </AppLink>
            <Skeleton className={cls.text} width="100%" height={50} /> 
        </VStack>
    );
}

if(!comment){
  return null 
}

  return (
    <VStack gap="8" max  className={classNames(cls.CommentCard, {}, [className])}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
        <Text className={cls.username} title={comment.user.username} />
    <Text className={cls.text} text={comment.text} /> 
</VStack>
  );
};

export default memo(CommentCard);  
