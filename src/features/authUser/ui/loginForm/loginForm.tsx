import React, { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "features/authUser";
import { getLogin } from "features/authUser/model/selectors/getLogin/getLogin";
import { LoginByUsername } from "features/authUser/model/services/LoginByUserName";
import { ThemeButton } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/ui/Text";
import { TextTheme } from "shared/ui/Text/ui/Text";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = memo((props) => {
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLogin);

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, []);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, []); 

  const onClickLogin = useCallback(() => {
    dispatch(LoginByUsername({ username, password }));
  }, [username, password]);

  const { t } = useTranslation();
  const { className } = props;
  return (
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
      ></Input>
      <Input
        className={cls.input}
        placeholder="Введите пароль"
        type="text"
        onChange={onChangePassword}
        value={password}
      ></Input>
      <Button disabled={isLoading} theme={ThemeButton.OUTLINE} className={cls.LoginBtn} onClick={onClickLogin} >{t("Войти")}</Button>
    </div>
  );
});
