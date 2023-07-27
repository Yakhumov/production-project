import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import cls from './Button.module.scss'
import { Mods, classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton  {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted',
    DISABLED = 'disabled',
    OUTLINE_RED = 'outline_red'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl', 
}

interface ButtonProps extends ButtonHTMLAttributes <HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
    square?: boolean,
    size?: ButtonSize
    children?: ReactNode ,
    disabled?: boolean
  }
 
  
  export const Button: React.FC<ButtonProps> = memo((props) => {

   const {className, theme, children, size, disabled, square, ...otherProps} = props 
   
   const mods: Mods = {
    //@ts-ignore 
    [cls[theme]]: true,
    [cls.square]: square,
    //@ts-ignore
    [cls[size]]: true,
    [cls.disabled]: disabled,
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
  });