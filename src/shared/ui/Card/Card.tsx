import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';
import { Mods } from 'shared/lib/classNames/classNames';


export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme
}



export const Card = memo((props: CardProps) => {
    const { className, children, theme, ...otherProps } = props;

    const mods: Mods={
        //@ts-ignore
        [cls[theme]] : true  
    }

    return (
        <div
            className={classNames(cls.Card, mods, [className])} 
            {...otherProps}
        >
            {children}
        </div>
    );
});
