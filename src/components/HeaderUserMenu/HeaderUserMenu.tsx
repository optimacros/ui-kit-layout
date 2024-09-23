import type { FC } from 'react'

import { HeaderMenu } from '../HeaderMenu'
import { HeaderNotification } from '../HeaderNotification'
import type { MenuElement } from 'components/HeaderMenu/type'
import type { Notification } from 'components/HeaderNotification/type'

import styles from './HeaderUserMenu.module.css'

export interface HeaderUserMenuProps {
    elements: MenuElement[];
    notification: Notification;
}

export const HeaderUserMenu: FC<HeaderUserMenuProps> = (props) => {
    const { elements, notification } = props

    return (
        <div className={styles.User}>
            <HeaderNotification notification={notification} />

            <HeaderMenu elements={elements} />
        </div>
    )
}
