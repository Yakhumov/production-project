import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton  {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes <HTMLButtonElement> {
    className?: string;
    theme: ThemeButton
  }
  
  export const Button: React.FC<ButtonProps> = (props) => {
   const {className, theme, children, ...otherProps} = props  
    return (
      <button 
        className={classNames(cls.Button, {}, [className, cls[theme]])}
        {...otherProps}
        >  
      {children}
      </button>
    );
  };