import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton  {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted',
    DISABLED = 'disabled'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl', 
}

interface ButtonProps extends ButtonHTMLAttributes <HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton, 
    square?: boolean,
    size?: ButtonSize
  }
 
  
  export const Button: React.FC<ButtonProps> = (props) => {

   const {className, theme, children, size, disabled, square, ...otherProps} = props 
   
    
  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled] : disabled  
  };

    return (
      <button 
        className={classNames(cls.Button, mods, [className])}
        {...otherProps}
        disabled={disabled}  
        >  
      {children}
      </button>
    );
  };