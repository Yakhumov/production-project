import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import React, { memo, useCallback } from "react";
import { RouterPath } from "shared/config/RouterConfig/routerConfig";
import { Avatar } from "shared/ui/Avatar/ui";
import { Dropdown } from "shared/ui/Popups";
import { useDispatch, useSelector } from "react-redux";
import { isUserAdmin, isUserManager, userActions } from "entities/User";
import { getAuthData } from "features/authUser";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin == isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      direction="bottom left"
      className={classNames("", {}, [className])}
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: t("Админка"),
                href: RouterPath.admin_panel,
              },
            ]
          : []),
        {
          content: t("Профиль"),
          href: RouterPath.profile,
        },
        {
          content: t("Выйти"),
          onClick: onLogout,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
});
