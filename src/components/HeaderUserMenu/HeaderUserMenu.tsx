import { observer } from 'mobx-react'
import React from 'react'

import styles from './HeaderUserMenu.module.css'
import { MenuElement } from 'types/HeaderMenu'
import { HeaderMenu } from '../HeaderMenu'
import { HeaderNotification } from '../HeaderNotification'

interface HeaderUserMenuProps {
    elements: MenuElement[];
}

@observer
export class HeaderUserMenu extends React.Component<HeaderUserMenuProps> {
    render(): JSX.Element {
        const { elements } = this.props

        return (
            <div className={styles.User}>
                <HeaderNotification />
                <HeaderMenu elements={elements} />
            </div>
        )
    }
}
