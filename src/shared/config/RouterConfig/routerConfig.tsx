
import { UseRoles } from "entities/User";
import { AboutPage } from "pages/AboutPage";
import { AdminPanelPage } from "pages/AdminPanelPage";
import ArticleEditPage from "pages/ArticleEditPage/ui/ArticleEditPage/ArticleEditPage";
import { ArticlesPage } from "pages/ArticlesPage";
import ArticlesDetailsPage from "pages/ArticlesPageDetalis/ui/ArticlesDetailsPage";
import ForbiddenPage from "pages/ForbiddenPage/ui/ForbiddenPage/ForbiddenPage";
import { MainPage } from "pages/MainPage";
import { NotfoundPage } from "pages/NotfoundPage/ui/NotfoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

export  type AppRouteProps = RouteProps & {
  authOnly?: boolean 
  roles?: UseRoles[]
 }                                         

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about',
  NOTFOUND = 'notFound',
  ARTICLES = 'articles', 
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel', 
  PROFILE = 'profile',
  FORBIDDEN = 'forbidden'
}

export const RouterPath: Record<AppRouters, string> = {   
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: '/about',
  [AppRouters.PROFILE]: '/profile',
  [AppRouters.ARTICLES]: '/articles',
  [AppRouters.ARTICLE_DETAILS]: '/articles/', // + id 
  [AppRouters.ARTICLE_CREATE]: '/artiles/new',
  [AppRouters.ARTICLE_EDIT] : '/articles/:id/edit',
  [AppRouters.ADMIN_PANEL]: '/admin',
  [AppRouters.FORBIDDEN]: '/forbidden',
  [AppRouters.NOTFOUND]: '*'      
}

export const RouterConfig: Record<AppRouters, AppRouteProps> = {
  [AppRouters.MAIN]: {
    path: RouterPath[AppRouters.MAIN],
    element: <MainPage />
  },

  [AppRouters.PROFILE]: {
    path: RouterPath[AppRouters.PROFILE],
    element: <ProfilePage />,
    authOnly: true
  },

  [AppRouters.FORBIDDEN]: {
    path: RouterPath[AppRouters.FORBIDDEN],
    element: <ForbiddenPage/>,
  },

  [AppRouters.ADMIN_PANEL]: {
    path: RouterPath[AppRouters.ADMIN_PANEL],
    element: <AdminPanelPage/>,
    authOnly: true,
    roles: [UseRoles.ADMIN , UseRoles.MANAGER]
  },

  [AppRouters.ARTICLE_CREATE]: {
    path: `${RouterPath.article_create}`,
    element: <ArticleEditPage />,
    authOnly: true,
},
[AppRouters.ARTICLE_EDIT]: {
    path: `${RouterPath.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
},

  [AppRouters.ABOUT]: {
    path: RouterPath[AppRouters.ABOUT], 
    element: <AboutPage />
  },

  [AppRouters.ARTICLES]: {
    path: RouterPath[AppRouters.ARTICLES], 
    element: <ArticlesPage />,
    authOnly: true
  },

  [AppRouters.ARTICLE_DETAILS]: {
    path: `${RouterPath[AppRouters.ARTICLE_DETAILS]}:id`,
    element: <ArticlesDetailsPage/>,
    authOnly: true,
  },

  [AppRouters.NOTFOUND]: {
    path: RouterPath[AppRouters.NOTFOUND],  
    element: <NotfoundPage/>
  }
};
