import classNames from 'classnames'
import { isUndefined } from 'lodash'
import type { MouseEventHandler, PropsWithChildren } from 'react'

import { ListItemContent } from './ListItemContent'

import styles from './ListItem.module.css'

export interface ListItemProps {
    text: string;
    nestingLevel: number;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    selected?: boolean;
    icon?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLDivElement>;
}

export function ListItem(props: PropsWithChildren<ListItemProps>): JSX.Element {
    const {
        active = false,
        href,
        icon,
        text,
        nestingLevel,
        onClick,
    } = props

    const className = classNames({
        [styles.ListItem]: true,
        [styles.Selected]: active,
    })

    const listItemPaddingLeft = 30 * nestingLevel

    if (!isUndefined(href)) {
        return (
            <a
                href={href}
                className={className}
                onClick={onClick}
                style={{ paddingLeft: `${listItemPaddingLeft}px` }}
            >
                <ListItemContent
                    shouldShowRightIcon
                    icon={icon}
                    text={text}
                />
            </a>
        )
    }

    return (
        <div
            className={className}
            onClick={onClick}
            style={{ paddingLeft: `${listItemPaddingLeft}px` }}
        >
            <ListItemContent
                icon={icon}
                text={text}
            />
        </div>
    )
}
