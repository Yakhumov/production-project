import { Counter } from 'entities/Counter';
import React from 'react';
import {useTranslation} from "react-i18next";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPageDetalis.module.scss'

interface ArticlesDetalisPageProps {
    className?:string
}

const ArticlesPageDetalis: React.FC<ArticlesDetalisPageProps> = (props) => {
    const {className} = props
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.ArticlesPageDetalis, {}, [className])}>
            
            {t('Страница id  статьи')} 
        </div>
    );
};

export default ArticlesPageDetalis;

