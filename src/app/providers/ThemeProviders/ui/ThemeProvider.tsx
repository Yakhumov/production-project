import { ReactNode } from 'react';
import React, { useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from '../lib/themeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;    

export interface ThemeProviderProps{
  children: ReactNode
}

 const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const {children} = props
    const [theme, setTheme] = useState<Theme>(defaultTheme);
  
    const defaultProps = useMemo(() => ({
      theme: theme,
      setTheme: setTheme 
    }), [theme]);
  
    return (
      <ThemeContext.Provider value={defaultProps}>       
        {children}
      </ThemeContext.Provider>
    );
  };

  export default ThemeProvider
  