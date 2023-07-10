import React, { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const onTogle = () => {
    setCollapsed((prev) => !prev);
  };

  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <div
        className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
          className,
        ])}
      >
      <button onClick={onTogle}>Свернуть</button>  
      <div className={cls.switchers}>
      <ThemeSwitcher/>
      </div>
      </div>
    </>
  );
};
