import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { SidebarItemLists } from 'widgets/Sidebar/model/items';
import SidebarItem from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { useMemo } from 'react';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC <SidebarProps> = memo(({className}) => {   
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => SidebarItemLists.map((item) => (
        <SidebarItem 
            item={item}
            collapsed={collapsed}
            key={item.path} 
        />
    )), [collapsed]);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.M}        
                square
            >
                {collapsed ? '>' : '<'}         
            </Button>
            <VStack role={'navigation'} gap={'8'} className={cls.items}>
                {itemsList}
            </VStack> 
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </aside>
    );
});
