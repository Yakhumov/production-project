import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className: string;
  short: boolean
}

const LangSwitcher: React.FC <LangSwitcherProps> = memo(({className,short}) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');       
  };

  return (
    <Button size={ButtonSize.M}
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
});

export default LangSwitcher;
