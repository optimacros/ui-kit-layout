import classNames from 'classnames'
import { JSX } from 'react'
import { ReactSVG } from 'react-svg'

import iconArrowRight from 'icons/icon-arrow-right.svg'

import styles from './ListItem.module.css'

interface ListItemContentProps {
    icon?: string | null;
    shouldShowRightIcon?: boolean;
    text: string;
}

export function ListItemContent({ icon, shouldShowRightIcon = false, text }: ListItemContentProps): JSX.Element {
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
