import classNames from 'classnames'
import { isUndefined } from 'lodash'
import type { FC } from 'react'
import { ReactSVG } from 'react-svg'

import { ResourceListItemContent } from './ResourceListItemContent.tsx'
import { ResourceListElement, ResourceListType } from '../types.ts'
import settingsIcon from 'icons/icon-settings.svg'

import styles from './ResourceListItem.module.css'

export interface ResourceListItemProps {
    listItem: ResourceListElement;
    nestingLevel: number;
    handleUpdateResourceList: (itemId: number | string) => void;
    getIcon?: (icon: ResourceListType | string) => string;
    getOpenedIcon?: (icon: ResourceListType | string) => string;
}

export const ResourceListItem:FC<ResourceListItemProps> = (props) => {
    const {
        listItem,
        nestingLevel,
        getIcon,
        getOpenedIcon,
        handleUpdateResourceList,
    } = props

    const { label, opened, selected, icon, href, settingHref } = listItem

    const className = classNames({
        [styles.ResourceListItem]: true,
        [styles.Selected]: selected,
    })

    const listItemPaddingLeft = 30 * nestingLevel

    const handleClick = (): void => {
        handleUpdateResourceList(listItem.id)

        if (listItem.onClick) {
            listItem.onClick(listItem)
        }
    }

    const handleSettingClick = (): void => {
        if (listItem.settingOnClick) {
            listItem.settingOnClick(listItem)
        }
    }

    if (!isUndefined(href)) {
        return (
            <div className={styles.Container}>
                <a
                    href={href}
                    className={className}
                    onClick={handleClick}
                    style={{ paddingLeft: `${listItemPaddingLeft}px` }}
                >
                    <ResourceListItemContent
                        shouldShowRightIcon
                        icon={icon}
                        label={label}
                        opened={opened}
                        selected={selected}
                        getIcon={getIcon}
                        getOpenedIcon={getOpenedIcon}
                    />
                </a>
                {settingHref
                    ? (
                        <a
                            className={styles.Setting}
                            target="_blank"
                            href={settingHref}
                            onClick={handleSettingClick}
                            rel="noreferrer"

                        >
                            <div className={styles.Icon}>
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
            onClick={handleClick}
            style={{ paddingLeft: `${listItemPaddingLeft}px` }}
        >
            <ResourceListItemContent
                icon={icon}
                label={label}
                opened={opened}
                selected={selected}
                getIcon={getIcon}
                getOpenedIcon={getOpenedIcon}
            />
        </div>
    )
}
