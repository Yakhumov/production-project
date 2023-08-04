import React from "react"
import { RouterPath } from "shared/config/RouterConfig/routerConfig"
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'  


export interface SidebarItemType {
    path: string,
    text: string,
    Icon:  React.VFC<React.SVGAttributes<SVGElement>>
    authOnly?: boolean,
}

export const   SidebarItemLists : SidebarItemType [] = [
    {
        path: RouterPath.main, 
        Icon: MainIcon,
        text: 'Главная '
    },

    {
        path: RouterPath.about,
        Icon: AboutIcon,
        text: ' О сайте '
    },

    {
        path: RouterPath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true
    },

    {
        path: RouterPath.articles,
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true     
    }


] 