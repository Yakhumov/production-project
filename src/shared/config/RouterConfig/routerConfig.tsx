import { AboutPage } from "pages/AboutPage";
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
  PROFILE = 'profile'
}

export const RouterPath: Record<AppRouters, string> = {   
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: '/about',
  [AppRouters.PROFILE]: '/profile',
  [AppRouters.NOTFOUND]: '*'
}

export const RouterConfig: Record<AppRouters, AppRouterProps> = {
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

  [AppRouters.NOTFOUND]: {
    path: RouterPath[AppRouters.NOTFOUND], 
    element: <NotfoundPage/>
  }

}
