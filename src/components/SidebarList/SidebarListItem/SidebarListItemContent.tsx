import classNames from 'classnames'
import type { FC } from 'react'
import { ReactSVG } from 'react-svg'

import iconArrowRight from 'icons/icon-arrow-right.svg'

import styles from './SidebarListItem.module.css'

interface SidebarListItemContentProps {
    icon?: string | null;
    shouldShowRightIcon?: boolean;
    text: string;
}

export const ListItemContent: FC<SidebarListItemContentProps> = (props) => {
    const { icon, shouldShowRightIcon = false, text } = props

    return (
        <>
            {icon
                ? (
                    <div className={styles.Icon}>
                        <ReactSVG src={icon}/>
                    </div>
                )
                : null
            }

            <div className={styles.Text}>
                {text}
            </div>

            {shouldShowRightIcon
                ? (
                    <div className={classNames(
                        styles.Icon,
                        styles.RightIcon,
                    )}
                    >
                        <ReactSVG src={iconArrowRight}/>
                    </div>
                )
                : null
            }
        </>
    )
}
