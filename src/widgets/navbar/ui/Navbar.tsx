import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useEffect, useState } from "react";
import { Button } from "shared/ui/Button";
import { ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/authUser/ui/LoginModal/LoginModal";
import { userActions } from "entities/User";
import cls from "./Navbar.module.scss";
import { Text } from "shared/ui/Text";
import { AppLink, AppLinkTheme } from "shared/ui/Applink/AppLink";
import { RouterPath } from "shared/config/RouterConfig/routerConfig";
import { TextTheme } from "shared/ui/Text/ui/Text";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getAuthData } from "features/authUser";
import { HStack, VStack } from "shared/ui/Stack";
import { AvatarDropdown } from "features/avatarDropdawn";
import { NotificationButton } from "features/notificationButton";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useAppDispatch();
  const authData = useSelector(getAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  });

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          title={t("My-App")}
          theme={TextTheme.INVERTED}
          className={cls.appName}
        />
        <AppLink
          to={RouterPath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createLink}
        >
          {t("Создать статью")}
        </AppLink>
        <HStack gap='16' className={cls.actions}>  
        <NotificationButton/> 
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR}
        className={cls.links}
        onClick={onShowModal}
      >
        {t("Войти")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </header>
  );
});
