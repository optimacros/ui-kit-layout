import { Component, JSX } from 'react'
import { Icon } from 'ui-kit-core'

import styles from './HeaderNavigation.module.css'

export interface HeaderNavigationProps {
    title: string;
    onClick: () => void;
}

export class HeaderNavigation extends Component<HeaderNavigationProps> {
    render(): JSX.Element {
        return (
            <div
                role="none"
                className={styles.Container}
                onClick={this.props.onClick}
                title={this.props.title}
            >
                <div className={styles.Element}>
                    <div className={styles.Element_IconContainer}>
                        <Icon
                            className={styles.Element_Icon}
                            value="menu"
                        />
                    </div>

                    <div className={styles.Element_Title}>
                        {this.props.title}
                    </div>
                </div>
            </div>
        )
    }
}
