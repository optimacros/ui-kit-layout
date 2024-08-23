import React from 'react'


import styles from './HeaderNavigation.module.css'
import { Icon } from 'ui-kit-core';

type Props = {
    title: string;
    onClick: () => void;
}

export class HeaderNavigation extends React.Component<Props> {
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
