import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, MutableRefObject, ReactNode, useRef,UIEvent
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import cls from './Page.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { UIActions, getUIScrollByPath } from 'features/ui';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateShema } from 'app/providers/ThemeProviders/StoreProvider/config/StateShema';
import { useThrottle } from 'shared/lib/hooks/useTrottle/useTrottle';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch() 
    const {pathname} = useLocation()
    const setScrollPosition = useSelector( (state: StateShema)=> getUIScrollByPath(state,pathname))

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(()=>{
        wrapperRef.current.scrollTop = setScrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(UIActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    return (
        <section
            ref={wrapperRef}
            onScroll={onScroll}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
           {onScrollEnd ?  <div className={cls.trigger} ref={triggerRef} /> : null }
        </section>
    );
});
