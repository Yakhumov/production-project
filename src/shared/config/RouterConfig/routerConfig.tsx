import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotfoundPage } from "pages/NotfoundPage/ui/NotfoundPage";
import { RouteProps } from "react-router-dom";

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about',
  NOTFOUND = 'notFound'
}

export const RouterPath: Record<AppRouters, string> = {   
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: '/about',
  [AppRouters.NOTFOUND]: '*'
}

export const RouterConfig: Record<AppRouters, RouteProps> = {
  [AppRouters.MAIN]: {
    path: RouterPath[AppRouters.MAIN],
    element: <MainPage />
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
