import React from 'react'
import type {MenuElement} from 'types/HeaderMenu'

import styles from './Header.module.css'
import { ToggleIcon } from 'components/ToggleIcon/ToggleIcon';
import { HeaderMenu, HeaderUserMenu } from 'components';
import { Notification } from 'types/Notification';


interface HeaderProps {
    elementsMenu: MenuElement[];
    elementsUserMenu: MenuElement[];
    notification: Notification;
    showToggleIcon?: boolean;
}


export class Header extends React.Component<HeaderProps> {
    render(): JSX.Element {
        const {elementsMenu, elementsUserMenu, notification, showToggleIcon = true} = this.props;
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

}
