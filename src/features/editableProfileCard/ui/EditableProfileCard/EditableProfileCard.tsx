import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect";
import { Currency } from "entities/Currency/model/types/currency";
import { Country } from "entities/Country/model/types/country";
import { Text } from "shared/ui/Text";
import { TextTheme } from "shared/ui/Text/ui/Text";
import { ProfileCard } from "entities/Profile";
import {DynamicModuleLoader,ReducersList,} from "shared/lib/components/DynamicModelLoader/DynamicModelLoader";
import { VStack } from "shared/ui/Stack";
import { getProfileForm } from "entities/Profile";
import { fetchProfileData } from "entities/Profile";
import { ProfileActions, ProfileReducer } from "entities/Profile";
import { ValidateProfileErrors } from "entities/Profile";
import { validateProfileErrors } from "entities/Profile/model/selectors/getValidateErrors/getValidateErrors";
import { EditProfileCardHeader } from "./EditProfileCardHeader/EditProfileCardHeader";
import { getProfileIsError } from "entities/Profile/model/selectors/getIsError/getIsError";
import { getProfileIsloading } from "entities/Profile/model/selectors/getIsloading/getIsloading";
import { getProfileReadOnly } from "entities/Profile/model/selectors/getReadOnly/getReadOnly";

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  profile: ProfileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation("profile");

  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsloading);
  const error = useSelector(getProfileIsError);
  const readonly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(validateProfileErrors);

  const validateErrorTranslates = {
    [ValidateProfileErrors.SERVER_ERROR]: t("Серверная ошибка при сохранении"),
    [ValidateProfileErrors.INCORRECT_COUNTRY]: t("Некорректный регион"),
    [ValidateProfileErrors.NO_DATA]: t("Данные не указаны"),
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
    [ValidateProfileErrors.INCORRECT_AGE]: t("Некорректный возраст"),
  };

  useInitialEffect(() => {
    dispatch(fetchProfileData());
  });

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.editProfile({ first: value || "" }));
    },   
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.editProfile({ lastname: value || "" }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.editProfile({ city: value || "" }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.editProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.editProfile({ username: value || "" }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(ProfileActions.editProfile({ avatar: value || "" }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(ProfileActions.editProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(ProfileActions.editProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap="8" max className={classNames("", {}, [className])}>
        <EditProfileCardHeader />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              key={err}
              theme={TextTheme.ERROR}
              text={validateErrorTranslates[err]}
              data-testId={"EditableProfileCard.EditError"}
            />
          ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={onChangeFirstname}
          onChangeLastName={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUserName={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
