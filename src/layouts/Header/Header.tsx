import React from 'react'
import type {MenuElement} from 'types/HeaderMenu'

import styles from './Header.module.css'
import { ToggleIcon } from 'components/ToggleIcon/ToggleIcon';
import { HeaderMenu, HeaderUserMenu } from 'components';


interface HeaderProps {
    elementsMenu: MenuElement[];
    elementsUserMenu: MenuElement[];
    showToggleIcon?: boolean;
}


export class Header extends React.Component<HeaderProps> {
    render(): JSX.Element {
        const {elementsMenu, elementsUserMenu, showToggleIcon = true} = this.props;
        return (
            <header className={styles.Header}>
                <HeaderMenu elements={elementsMenu}/>

                <HeaderUserMenu elements={elementsUserMenu}/>

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
