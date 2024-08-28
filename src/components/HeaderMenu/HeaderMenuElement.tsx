import classNames from 'classnames'
import { isEmpty } from 'lodash'
import { Component, createRef, RefObject, JSX } from 'react'

import { HeaderMenuElementContainer } from './HeaderMenuElementContainer'
import { HeaderSubMenu } from './HeaderSubMenu'
import type { MenuElement } from 'types/HeaderMenu'

import styles from './HeaderMenu.module.css'

type Props = {
    element: MenuElement;
    firstLevel?: boolean;
}

type State = {
    showMenu: boolean;
}

export class HeaderMenuElement extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.node = createRef()
    }

    private readonly node: RefObject<HTMLLIElement>

    state = {
        showMenu: false,
    }

    render(): JSX.Element | null {
        const { element } = this.props

        if (element.hidden) {
            return null
        }

        const className = classNames({
            [styles.MenuItem]: true,
            [styles.MenuItem__disabled]: element.disabled,
            [styles.MenuItem_child]: element.isChild,
            [styles.MenuItem_parent]: element.isParent,
        })

        return (
            <li
                className={className}
                ref={this.node}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                title={element.title}
            >
                <HeaderMenuElementContainer
                    element={element}
                    isFirstLevel={this.props.firstLevel}
                />

                {this.renderSubMenu()}
            </li>
        )
    }

    renderSubMenu(): JSX.Element | null {
        const { element } = this.props

        if (!this.state.showMenu || isEmpty(element.children)) {
            return null
        }

        return (
            <HeaderSubMenu
                element={element}
                elements={element.children}
                rootElementNode={this.node}
                firstLevel={this.props.firstLevel}
            />
        )
    }

    private onMouseEnter = (): void => {
        this.setState(() => {
            return {
                showMenu: true,
            }
        })
    }

    private onMouseLeave = (): void => {
        this.setState(() => {
            return {
                showMenu: false,
            }
        })
    }
}
