import { Menu } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { Fragment, ReactNode } from "react";
import { AppLink } from "../Applink/AppLink";
import cls from "./Dropdown.module.scss";

export interface DropdownItem {
  disabled?: boolean;
  content?: string;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
}

export function Dropdown(props: DropdownProps) {
  const { className, trigger, items } = props;

  return ( 
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [className])}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
