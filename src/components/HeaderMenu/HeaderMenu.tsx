import classNames from 'classnames'
import { isEmpty, map } from 'lodash'
import { Component, JSX } from 'react'

import { HeaderMenuElement } from './HeaderMenuElement'
import { MenuElement } from './type'

import styles from './HeaderMenu.module.css'

type Props = {
    elements: MenuElement[];
    className?: string;
}

export class HeaderMenu extends Component<Props> {
    render(): JSX.Element | null {
        if (isEmpty(this.props.elements)) {
            return null
        }

        const className = classNames(
            styles.Container,
            this.props.className,
        )

        return (
            <div className={className}>
                <ul className={styles.Menu}>
                    {this.renderList()}
                </ul>
            </div>
        )
    }

    renderList(): (JSX.Element | null)[] {
        return map(this.props.elements, (element) => {
            if (element.hidden) {
                return null
            }

            return (
                <HeaderMenuElement
                    key={element.id}
                    element={element}
                    firstLevel
                />
            )
        })
    }
}
