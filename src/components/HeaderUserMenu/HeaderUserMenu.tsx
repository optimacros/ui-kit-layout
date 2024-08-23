import React from 'react'

import styles from './HeaderUserMenu.module.css'
import { MenuElement } from 'types/HeaderMenu'
import { HeaderMenu } from '../HeaderMenu'
import { HeaderNotification } from '../HeaderNotification'
import { Notification } from 'types/Notification'

interface HeaderUserMenuProps {
    elements: MenuElement[];
    notification: Notification;
}

export class HeaderUserMenu extends React.Component<HeaderUserMenuProps> {
    render(): JSX.Element {
        const { elements, notification } = this.props

        return (
            <div className={styles.User}>
                <HeaderNotification notification={notification} />
                <HeaderMenu elements={elements} />
            </div>
        )
    }
}
