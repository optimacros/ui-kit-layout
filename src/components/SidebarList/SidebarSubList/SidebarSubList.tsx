import classNames from 'classnames'
import type { PropsWithChildren, MouseEvent } from 'react'
import { useState, JSX } from 'react'

import { SidebarListItem } from '../SidebarListItem'

import styles from './SidebarSubList.module.css'

interface SidebarSubListProps {
  text: string;
  nestingLevel: number;
  isExpand?: boolean;
  icon?: string;
  expandIcon?: string;
}

export function SidebarSubList(props: PropsWithChildren<SidebarSubListProps>): JSX.Element {
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
