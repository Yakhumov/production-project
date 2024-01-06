import { Mods, classNames } from "shared/lib/classNames/classNames";
import React, { ReactNode, memo } from "react";
import cls from './Drawer.module.scss'
import { Portal } from "@headlessui/react";
import { useTheme } from "app/providers/ThemeProviders";
import { Overlay } from "../Overlay/Overlay";

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, isOpen, onClose } = props; 

  const {theme} = useTheme() 

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [ className, theme, 'app-drawer'])}> 
      <Overlay onClick={onClose}/>
        <div className={cls.content}>{children}</div>
      </div>
    </Portal> 
  );
});
