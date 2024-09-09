import { FC } from 'react'

import { HeaderMenu, HeaderUserMenu } from 'components'
import { ToggleIcon } from 'components/ToggleIcon/ToggleIcon'
import type { MenuElement } from 'types/HeaderMenu'
import { Notification } from 'types/Notification'

import styles from './Header.module.css'

interface HeaderProps {
    elementsMenu: MenuElement[];
    elementsUserMenu: MenuElement[];
    notification: Notification;
    showToggleIcon?: boolean;
}

export const Header: FC<HeaderProps> = (props) => {
    const { elementsMenu, elementsUserMenu, notification, showToggleIcon = true } = props

    return (
        <header className={styles.Header}>
            <HeaderMenu
                elements={elementsMenu}
                className={styles.HeaderMenu}
            />

            <HeaderUserMenu
                elements={elementsUserMenu}
                notification={notification}
            />

            {showToggleIcon && (
            <ToggleIcon
                wrapperClassName={styles.ToggleIconWrapper}
                iconClassName={styles.ToggleIcon}
            />
            )}
        </header>
    )
}
