import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about'
}

export const RouterPath: Record<AppRouters, string> = {   
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: '/about'
}

export const RouterConfig: Record<AppRouters, RouteProps> = {
  [AppRouters.MAIN]: {
    path: RouterPath[AppRouters.MAIN],
    element: <MainPage />
  },

  [AppRouters.ABOUT]: {
    path: RouterPath[AppRouters.ABOUT], 
    element: <AboutPage />
  }
}
