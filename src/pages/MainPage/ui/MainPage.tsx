import { Counter } from 'entities/Counter';
import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation();

    return (
        <div style={{padding: '15px', marginLeft: '17px' }}>         
            {t('Главная страница')} 
        </div>
    );
};

export default MainPage; 

