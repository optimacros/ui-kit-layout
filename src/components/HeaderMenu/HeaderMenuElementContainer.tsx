import classNames from 'classnames'
import { isEmpty } from 'lodash'
import { Component, JSX } from 'react'
import { ReactSVG } from 'react-svg'
import { Icon } from 'ui-kit-core'

import { MenuElement } from './type'

import styles from './HeaderMenu.module.css'

type Props = {
    element: MenuElement;
    isFirstLevel?: boolean;
}

export class HeaderMenuElementContainer extends Component<Props> {
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
                {element.icon.includes('.svg')
                    ? <ReactSVG src={element.icon} />
                    : (
                        <Icon
                            className={styles.Element_Icon}
                            value={element.icon}
                        />
                    )
                }
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
