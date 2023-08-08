import React, { useCallback, useEffect } from 'react';
import {useTranslation} from "react-i18next";
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModelLoader/DynamicModelLoader';
import { Profile, ProfileActions, ProfileCard, ProfileReducer, fetchProfileData, getIsError, getIsloading, getProfileForm, getReadOnly } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';
import { validateProfileErrors } from 'entities/Profile/model/selectors/getValidateErrors/getValidateErrors';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { Text } from 'shared/ui/Text/ui/Text';
import { ValidateProfileErrors } from 'entities/Profile';
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';



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
    const validateErrors = useSelector(validateProfileErrors)
   

    const validateErrorTranslates = {
        [ValidateProfileErrors.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileErrors.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileErrors.INCORRECT_AGE]: t('Некорректный возраст'),
    };

    useInitialEffect(()=>{
      dispatch(fetchProfileData()) 
    })  

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
        <Page className={classNames('', {}, [className])}>
            <ProfilePageHeader/>
            {validateErrors?.length && validateErrors.map((error)=>{
                return (
                    <Text theme={TextTheme.ERROR} text={validateErrorTranslates[error]} key={error}/>
                )
            })}
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
        </Page>

        </DynamicModuleLoader>
    );
};

export default ProfilePage        
