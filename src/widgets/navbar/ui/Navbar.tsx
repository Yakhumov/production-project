import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/Applink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <div>
       
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to="/"
            className={cls.mainLink}
          >
            Главная
          </AppLink>
        </div>
        <div>
          <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
            О сайте
          </AppLink>
        </div>
      </div>
    </div>
  );
};
