import { isEmpty, map } from 'lodash'

import React from 'react'
import styles from './HeaderMenu.module.css'
import { HeaderMenuElement } from "./HeaderMenuElement";
import { MenuElement } from 'types/HeaderMenu';


type Props = {
    elements: MenuElement[];
}

export class HeaderMenu extends React.Component<Props> {
    render(): JSX.Element | null {
        if (isEmpty(this.props.elements)) {
            return null
        }

        return (
            <div className={styles.Container}>
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
