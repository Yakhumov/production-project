import React, { useCallback, useEffect } from 'react';
import {useTranslation} from "react-i18next";
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModelLoader/DynamicModelLoader';
import { Profile, ProfileActions, ProfileCard, ProfileReducer, fetchProfileData, getIsError, getIsloading, getProfileData, getProfileForm, getReadOnly } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';


const reducers : ReducersList = { 
    profile: ProfileReducer,
    
}

interface ProfilePageProps{
    className?:string
}

const ProfilePage: React.FC <ProfilePageProps> = (props) => {
    const { className} = props
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch() 
    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getIsloading)
    const error = useSelector(getIsError) 
    const readonly = useSelector(getReadOnly) 

    useEffect(()=>{

      dispatch(fetchProfileData()) 
    },[])  

    const onChangeFirstName = useCallback((value?:string)=>{
        dispatch(ProfileActions.editProfile({first: value ||  '' }))
    },[])

    const onChangeLastName = useCallback((value?:string)=>{
        dispatch(ProfileActions.editProfile({lastname:  value || '' }))
    },[])
    
    const onChangeAge = useCallback((value?: string  )=>{
       dispatch(ProfileActions.editProfile({age: Number(value|| 0)}))
    },[])

    const onChangeCity = useCallback((value?: string )=>{
        dispatch(ProfileActions.editProfile({city: value}))  
    },[])

    const onChangeUserName = useCallback((value?: string)=>{
         dispatch(ProfileActions.editProfile({username: value || ''}))
    },[])

    const onChangeAvatar = useCallback((value?: string)=>{
        dispatch(ProfileActions.editProfile({avatar: value || ''}))
    },[])

    const onChangeCurrency = useCallback((currency: Currency)=>{
        dispatch(ProfileActions.editProfile({currency}))
    },[])

    const onChangeCountry = useCallback((country: Country)=>{
        dispatch(ProfileActions.editProfile({country}))
    },[])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>   
        <div className={classNames('', {}, [className])}>
            <ProfilePageHeader/>
            <ProfileCard
            data={formData}
            isLoading={isLoading}
            error={error}
            readonly={readonly} 
            onChangeFirstName={onChangeFirstName}
            onChangeLastName={onChangeLastName}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}  
            onChangeUserName={onChangeUserName}
            onChangeAvatar={onChangeAvatar}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
            

            />
        </div>

        </DynamicModuleLoader>
    );
};

export default ProfilePage        
