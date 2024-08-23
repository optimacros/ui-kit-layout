import classNames from 'classnames'
import { isEmpty } from 'lodash'
import React from 'react'

import type { MenuElement } from 'types/HeaderMenu'


import styles from './HeaderMenu.module.css'
import { Icon } from 'ui-kit-core'

type Props = {
    element: MenuElement;
    isFirstLevel?: boolean;
}

export class HeaderMenuElementContainer extends React.Component<Props> {
    render(): JSX.Element {
        const { element } = this.props

        const className = classNames({
            [styles.Element]: true,
            [styles.Element_withIcon]: !!element.icon,
            [styles.ElementContainer]: true,
        })

        return (
            <div
                role="none"
                className={className}
                onClick={this.onClick}
            >
                {this.renderIcon(element)}

                <div className={styles.Element_Title}>
                    {element.title}
                </div>

                {this.renderArrowIcon()}
            </div>
        )
    }

    renderIcon(element: MenuElement): JSX.Element | null {
        if (!element.icon) {
            return null
        }

        return (
            <div className={styles.Element_IconContainer}>
                <Icon
                    className={styles.Element_Icon}
                    value={element.icon}
                />
            </div>
        )
    }

    renderArrowIcon(): JSX.Element | null {
        const { element, isFirstLevel } = this.props

        if (isFirstLevel || isEmpty(element.children) || element.disabled) {
            return null
        }

        return (
            <div>
                <Icon
                    className={styles.Element_Arrow}
                    value="navigate_next"
                />
            </div>
        )
    }

    private onClick = (): void => {
        const { element } = this.props

        if (!element.disabled && element.open) {
            element.open()
        }
    }
}
