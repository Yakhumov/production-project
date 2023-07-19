import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input'

interface LoginFormProps {
    className?: string
}

export const LoginForm: React.FC <LoginFormProps> = (props) => {
    const {t} = useTranslation() 
    const {className} =  props
  return (
       <div className={classNames(cls.loginForm, {}, [className])}   >
          <Input autofocus className={cls.input} placeholder='Введите имя' type='text'></Input>
          <Input  className={cls.input} placeholder='Введите пароль' type = 'text'></Input> 
         <Button className={cls.LoginBtn}>
            {t('Войти')}
         </Button>
       </div>
  )
}
