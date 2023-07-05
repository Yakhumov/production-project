import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { ClassNames } from "shared/lib/ClassNames/ClassNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const {
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    className,
    ...otherProps
  } = props;

  return (
    <div className={ClassNames(cls.AppLink, {}, [className, cls[theme]])}>
      <Link to={to} {...otherProps}>
        {children}
      </Link>
    </div>
  );
};
