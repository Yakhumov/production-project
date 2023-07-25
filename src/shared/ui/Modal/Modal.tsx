import { Mods, classNames } from "shared/lib/classNames/classNames";
import React, {
  ReactNode,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Portal } from "shared/ui/Portal/Portal";
import { useTheme } from "app/providers/ThemeProviders";
import cls from "./Modal.module.scss";
import { MutableRefObject } from "react";

interface ModalProps {
  className: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy: boolean
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const { theme } = useTheme();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(()=>{
    if(isOpen){
      setIsMounted(true)
    }
  },[isOpen])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods:Mods  = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  //@ts-ignore
  if (lazy && !isMounted) { 
    return null;
}

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
