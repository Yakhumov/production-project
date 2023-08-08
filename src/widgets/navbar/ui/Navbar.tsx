import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import  { memo, useCallback, useEffect, useState } from 'react';
import { Button  } from 'shared/ui/Button';
import { ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/authUser/ui/LoginModal/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData } from 'features/authUser';
import { userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC <NavbarProps> =memo(({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getAuthData); 
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, []);

    useEffect(()=>{
        dispatch(userActions.initAuthData())
    })

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ThemeButton.CLEAR}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}> 
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal  
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </header>
    );
});
