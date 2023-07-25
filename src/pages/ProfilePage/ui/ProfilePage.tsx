import React, { useEffect } from 'react';
import {useTranslation} from "react-i18next";
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModelLoader/DynamicModelLoader';
import { ProfileCard, ProfileReducer, fetchProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';


const reducers : ReducersList = {
    profile: ProfileReducer 
}

const ProfilePage = () => {
    const {t} = useTranslation('about');
    const dispatch = useAppDispatch() 

    useEffect(()=>{

      dispatch(fetchProfileData()) 
    },[])  

    return (
        <DynamicModuleLoader reducers={reducers}>   
        <div>
            <ProfileCard className=''/>
        </div>

        </DynamicModuleLoader>
    );
};

export default ProfilePage        
