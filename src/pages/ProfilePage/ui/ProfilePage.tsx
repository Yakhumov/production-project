import React from 'react';
import {useTranslation} from "react-i18next";
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModelLoader/DynamicModelLoader';
import { ProfileReducer } from 'entities/Profile';

const reducers : ReducersList = {
    profile: ProfileReducer
}

const ProfilePage = () => {
    const {t} = useTranslation('about');

    return (
        <DynamicModuleLoader reducers={reducers}>
        <div>
            {t('Страница пользователя ')}
        </div>

        </DynamicModuleLoader>
    );
};

export default ProfilePage        
