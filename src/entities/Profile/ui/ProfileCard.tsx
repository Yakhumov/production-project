import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getIsloading } from '../model/selectors/getIsloading/getIsloading';
import { getIsError } from '../model/selectors/getIsError/getIsError';
import { Text } from 'shared/ui/Text';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getIsloading);
    const error = useSelector(getIsError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button
                    size={ButtonSize.M}
                    className={cls.editBtn}
                    theme={ThemeButton.CLEAR}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input     
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
