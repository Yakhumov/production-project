import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme } from "./themeContext";
import { ThemeContext } from "./themeContext";

 
export interface useThemeResult{
    ToggleTheme: ()=>void; 
    theme: Theme;
}

export function useTheme () : useThemeResult{
    const {theme,setTheme} = useContext(ThemeContext)

    const ToggleTheme = () =>{
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme) 

  }

  return {theme, 
    ToggleTheme,
}
}