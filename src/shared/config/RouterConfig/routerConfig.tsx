
import { AboutPage } from "pages/AboutPage";
import { ArticlesPage } from "pages/ArticlesPage";
import ArticlesDetailsPage from "pages/ArticlesPageDetalis/ui/ArticlesDetailsPage";
import { MainPage } from "pages/MainPage";
import { NotfoundPage } from "pages/NotfoundPage/ui/NotfoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

export  type AppRouteProps = RouteProps & {
  authOnly?: boolean 
 }                                         

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about',
  NOTFOUND = 'notFound',
  ARTICLES = 'articles', 
  ARTICLE_DETAILS = 'article_details',
  PROFILE = 'profile'
}

export const RouterPath: Record<AppRouters, string> = {   
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: '/about',
  [AppRouters.PROFILE]: '/profile',
  [AppRouters.ARTICLES]: '/articles',
  [AppRouters.ARTICLE_DETAILS]: '/articles/', // + id 
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
