import React from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './LoginModal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { LoginForm } from '../loginForm/loginForm'

interface  LoginModalProps {
    className?: string
    isOpen: boolean,
    onClose: () => void 
}

export const LoginModal: React.FC <LoginModalProps> = (props) => {
    const {className, isOpen,onClose} =  props 
  return (
     <Modal  lazy className= {classNames(cls.Modal, {}, [className])}
     isOpen={isOpen}
     onClose={onClose}  
     >
        <LoginForm  />  
     </Modal>
  )
}
