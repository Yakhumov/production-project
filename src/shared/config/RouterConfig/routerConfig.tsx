import { AboutPage } from "pages/AboutPage";
import { ArticlesPage } from "pages/ArticlesPage";
import { ArticlesPageDetails } from "pages/ArticlesPageDetalis";
import { MainPage } from "pages/MainPage";
import { NotfoundPage } from "pages/NotfoundPage/ui/NotfoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

  export  type AppRouterProps = RouteProps & {
  authOnly?: boolean 
 }

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about',
  NOTFOUND = 'notFound',
  ARTICLES = 'articles',
  ARTICLES_DETALIS = 'articles_detalis',
  PROFILE = 'profile'
}

export const RouterPath: Record<AppRouters, string> = {   
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: '/about',
  [AppRouters.PROFILE]: '/profile',
  [AppRouters.ARTICLES]: '/articles',
  [AppRouters.ARTICLES_DETALIS]: '/articles/', // + id 
  [AppRouters.NOTFOUND]: '*'      
}

export const RouterConfig: Record<AppRouters, AppRouterProps> = {
  [AppRouters.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />
  },

  [AppRouters.PROFILE]: {
    path: RouterPath.profile,
    element: <ProfilePage />,
    authOnly: true
  },

  [AppRouters.ABOUT]: {
    path: RouterPath.about, 
    element: <AboutPage />
  },

  [AppRouters.ARTICLES]: {
    path: RouterPath.articles, 
    element: <ArticlesPage />,
    authOnly: true
  },

  [AppRouters.ARTICLES_DETALIS]: {
    path:  `${RouterPath.articles_detalis}:id`,
    element: <ArticlesPageDetails />,
    authOnly: true,
},

  [AppRouters.NOTFOUND]: {
    path: RouterPath.notFound,  
    element: <NotfoundPage/>
  }

}
