import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text } from "shared/ui/Text";
import { CommentForm } from "features/addCommentForm";
import { CommentList } from "entities/Comment";
import { CommentsIsLoading } from "pages/ArticlesPageDetalis/model/selectors/Comments";
import { useSelector } from "react-redux";
import { getArticleComments } from "pages/ArticlesPageDetalis/model/slice/ArticleDetailsComments.slice";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addCommentForArticle } from "pages/ArticlesPageDetalis/model/services/addCommentForm/AddCommentForm";
import { useInitialEffect } from "shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "pages/ArticlesPageDetalis/model/services/fetchCommentArticleById/fetchCommentArticleById";
import { VStack } from "shared/ui/Stack";
interface ArticleDetailsComments {
  className?: string;
  id: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsComments) => {
  const {id } = props;
  const { t } = useTranslation();
  const commentIsLoading = useSelector(CommentsIsLoading);
  const comments = useSelector(getArticleComments.selectAll);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );
  return (
    <VStack gap="16">
      <Text className={""} title={t("Комментарии")} />
      <CommentForm onSendComment={onSendComment} />
      <CommentList isLoading={commentIsLoading} comments={comments} />
    </VStack>
  );
});
