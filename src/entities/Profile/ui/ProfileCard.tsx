import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input";
import cls from "./ProfileCard.module.scss";
import { Profile } from "../types/Profile";
import { Loader } from "shared/ui/Loaders/Loader";
import { Text } from "shared/ui/Text";
import { TextAlign } from "shared/ui/Text/ui/Text";
import { Avatar } from "shared/ui/Avatar/ui";
import { CurrencySelect } from "entities/Currency";
import { CountrySelect } from "entities/Country";
import { Currency } from "entities/Currency/model/types/currency";
import { Country } from "entities/Country/model/types/country";
import { VStack } from "shared/ui/Stack";
import { HStack } from "shared/ui/Stack";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUserName?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
  
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const {
    className,
    error,
    data,
    isLoading,
    readonly,
    onChangeAge,
    onChangeCity,
    onChangeUserName,
    onChangeAvatar,
    onChangeFirstName,
    onChangeLastName,
    onChangeCurrency,
    onChangeCountry
  } = props;
  const { t } = useTranslation("profile");

  if (isLoading) {
    <HStack justify={'center'}max  className={classNames(cls.isLoading, {[cls.isLoading]:true}, [className])}>
      <Loader />
    </HStack>;
  }

  if (error) {
    <HStack justify={'center'} max className={classNames(cls.error, {}, [className, cls.error])}>
      <Text
        align={TextAlign.RIGHT}
        title={t("Произошла ошибка при загрузке профиля")}
        text={t("Попробуйте обновить страницу")}
      />
    </HStack>;
  }

  const mods: Mods = {
    [cls.editing] : !readonly
  }

  return (
    <VStack gap={'8'} max className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
                    <HStack justify={'center'} max className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </HStack>
                )}
        <Input
          value={data?.first}
          placeholder={t("Ваше имя")}
          className={cls.input}
          onChange={onChangeFirstName}
          readonly={readonly}
          data-testid="ProfileCard.FirstName"
        />
        <Input
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
          className={cls.input}
          onChange={onChangeLastName}
          readonly={readonly}
          data-testid="ProfileCard.LastName"

        />
        <Input
          value={data?.age}
          placeholder={t("Ваш возраст")}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t("Ваш город")}
          className={cls.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t("Ваше имя пользователя")}
          className={cls.input}
          onChange={onChangeUserName}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t("Ссылка на ваш аватар ")}
          className={cls.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
         className={cls.input}
         value={data?.country}
         onChange={onChangeCountry}
         readonly={readonly}
        />
    </VStack>
  );
};
