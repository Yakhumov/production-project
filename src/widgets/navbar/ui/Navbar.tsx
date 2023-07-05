import React from "react";
import cls from './Navbar.module.scss'
import { ClassNames } from "shared/lib/ClassNames/ClassNames";
import { AppLink, AppLinkTheme } from "shared/ui/Applink/AppLink";

export interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={ClassNames(cls.Navbar, {}, [className])}>
      <div className={cls.Links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>   
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          О сайте
        </AppLink>
      </div> 
    </div>
  );
};

export default Navbar;          
