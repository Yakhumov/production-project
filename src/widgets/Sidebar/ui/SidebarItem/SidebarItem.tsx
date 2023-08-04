import { Counter } from 'entities/Counter';
import React from 'react';
import {useTranslation} from "react-i18next";
import { AppLinkTheme } from 'shared/ui/Applink/AppLink';
import { AppLink } from 'shared/ui/Applink/AppLink';
import { RouterPath } from 'shared/config/RouterConfig/routerConfig';
import cls from './SidebarItem.module.scss'
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { SidebarItemType } from '../../model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { getAuthData } from 'features/authUser';
import { useSelector } from 'react-redux';

interface SidebarItemProps {  
  item: SidebarItemType
  collapsed: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({item, collapsed}) => {
    const {t} = useTranslation();
    const isAuth = useSelector(getAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path} 
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
        <item.Icon className={cls.icon} />
        <span className={cls.link}>
            {t(item.text)} 
        </span>
    </AppLink>
    );
};

export default SidebarItem

