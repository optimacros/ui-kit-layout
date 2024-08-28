import { Component, JSX } from 'react'

import { HeaderMenu } from '../HeaderMenu'
import { HeaderNotification } from '../HeaderNotification'
import { MenuElement } from 'types/HeaderMenu'
import { Notification } from 'types/Notification'

import styles from './HeaderUserMenu.module.css'

interface HeaderUserMenuProps {
    elements: MenuElement[];
    notification: Notification;
}

export class HeaderUserMenu extends Component<HeaderUserMenuProps> {
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
