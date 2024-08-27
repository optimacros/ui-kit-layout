﻿import classNames from 'classnames'
import { isUndefined } from 'lodash'
import type { MouseEventHandler, PropsWithChildren } from 'react'

import { ListItemContent } from './ListItemContent'
import settingsIcon from 'icons/icon-settings.svg'

import styles from './ListItem.module.css'
import { ReactSVG } from 'react-svg'

export interface ListItemProps {
    text: string;
    nestingLevel: number;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    selected?: boolean;
    icon?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLDivElement>;
    adminUrl?: string;
}

export function ListItem(props: PropsWithChildren<ListItemProps>): JSX.Element {
    const {
        active = false,
        href,
        icon,
        text,
        nestingLevel,
        onClick,
        adminUrl
    } = props

    const className = classNames({
        [styles.ListItem]: true,
        [styles.Selected]: active,
    })

    const listItemPaddingLeft = 30 * nestingLevel

    if (!isUndefined(href)) {
        return (
            <div className={styles.Container}>
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
                {adminUrl
                    ? (
                        <a className={styles.Setting} target="_blank" href={adminUrl}>
                            <div className={styles.Icon}
                            >
                                <ReactSVG src={settingsIcon}/>
                            </div>
                        </a>
                    )
                    : null
                }
            </div>
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
