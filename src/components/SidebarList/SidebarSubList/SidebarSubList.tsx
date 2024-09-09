import classNames from 'classnames'
import type { MouseEvent, FC, PropsWithChildren } from 'react'
import { useState } from 'react'

import { SidebarListItem } from '../SidebarListItem'

import styles from './SidebarSubList.module.css'

interface SidebarSubListProps {
  text: string;
  nestingLevel: number;
  isExpand?: boolean;
  icon?: string;
  expandIcon?: string;
}

export const SidebarSubList: FC<PropsWithChildren<SidebarSubListProps>> = (props) => {
    const { text, icon, expandIcon, children, isExpand, nestingLevel } = props

    const [expand, setExpand] = useState<boolean>(isExpand || false)

    const subListClassNames = classNames({
        [styles.SidebarSubList]: true,
        [styles.Expanded]: expand,
    })

    const handleClick = (e: MouseEvent): void => {
        e.stopPropagation()

        setExpand((prev) => !prev)
    }

    return (
        <div className={subListClassNames}>
            <SidebarListItem
                nestingLevel={nestingLevel}
                text={text}
                icon={expand
                    ? expandIcon
                    : icon}
                onClick={handleClick}
            />
            <div className={styles.Content}>{children}</div>
        </div>
    )
}
