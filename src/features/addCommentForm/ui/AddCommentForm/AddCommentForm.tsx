import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Input } from "shared/ui/Input";
import { Button } from "shared/ui/Button";
import { ThemeButton } from "shared/ui/Button/Button";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
  AddCommentFormError,
  AddCommentFormText,
} from "features/addCommentForm/model/selectors/AddCommentForm";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "features/addCommentForm/model/slices/AddCommentFormSlice";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModelLoader/DynamicModelLoader";
import cls from "./AddCommentForm.module.scss";

interface CommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

 const CommentForm: React.FC<CommentFormProps> = (props) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(AddCommentFormText);
  const error = useSelector(AddCommentFormError);

  const onCommentChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, []);  

  const onSendHandler = useCallback(() => {
    onSendComment(text || "");
    onCommentChange("");
  }, [onCommentChange, text, onSendComment]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm , {}, [className])}> 
        <Input
          className={cls.input}
          placeholder={t("Введите текст комментария")}
          value={text}
          onChange={onCommentChange} 
        />
        <Button theme={ThemeButton.OUTLINE} onClick={onSendHandler}>
          {t("Отправить")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

   export default memo(CommentForm);
