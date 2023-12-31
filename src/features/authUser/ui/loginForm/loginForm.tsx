import React, { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { Button } from "shared/ui/Button";
import { ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions, loginReducer } from "features/authUser";
import { loginByUsername } from "features/authUser";
import { Text } from "shared/ui/Text"; 
import { TextTheme } from "shared/ui/Text/ui/Text";
import { getLoginUsername } from "features/authUser/model/selectors/getLoginUserName/getLoginUserName";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getError } from "../../model/selectors/getError/getError";
import { getIsLoading } from "../../model/selectors/getIsLoading/getIsLoading";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModelLoader/DynamicModelLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo(({className, onSuccess}) => {
  const { t } = useTranslation();
  
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername) 
  const password = useSelector(getLoginPassword)
  const error = useSelector(getError)
  const isLoading = useSelector(getIsLoading)  

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);


  const onClickLogin = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));   
    if (result.meta.requestStatus === 'fulfilled') {
        onSuccess(); 
    }
}, [onSuccess, dispatch, password, username]);


  return (
    <DynamicModuleLoader
      removeAfterUnmount={true}
      reducers={initialReducers}
    >
      <div className={classNames(cls.loginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
        <Input
          autofocus
          className={cls.input}
          placeholder="Введите имя"
          type="text"
          onChange={onChangeUserName}
          value={username}
        />
        <Input
          className={cls.input}
          placeholder="Введите пароль"
          type="text"  
          onChange={onChangePassword}
          value={password}
        />
        <Button
          disabled={isLoading}
          theme={ThemeButton.CLEAR}
          className={cls.LoginBtn}
          onClick={onClickLogin}
        >
          {t("Войти")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
