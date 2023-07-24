import React, { memo } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = memo((props) => {
  const {
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    className,
    ...otherProps
  } = props;

  return (
    <div className={classNames(cls.AppLink, {}, [className, cls[theme]])}>       
      <Link to={to} {...otherProps}>
        {children}
      </Link>
    </div>
  );
});
