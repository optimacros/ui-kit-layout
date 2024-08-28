import classNames from 'classnames'
import type { PropsWithChildren, MouseEvent } from 'react'
import { useState, JSX } from 'react'

import { ListItem } from '../ListItem'

import styles from './SubList.module.css'

interface SubListProps {
    text: string;
    nestingLevel: number;
    isExpand?: boolean;
    icon?: string;
    expandIcon?: string;
}

export function SubList(props: PropsWithChildren<SubListProps>): JSX.Element {
    const {
        text,
        icon,
        expandIcon,
        children,
        isExpand,
        nestingLevel,
    } = props

    const [expand, setExpand] = useState<boolean>(isExpand || false)

    const subListClassNames = classNames({
        [styles.SubList]: true,
        [styles.Expanded]: expand,
    })

    const handleClick = (e: MouseEvent): void => {
        e.stopPropagation()

        setExpand(prev => !prev)
    }

    return (
        <div className={subListClassNames}>
            <ListItem
                nestingLevel={nestingLevel}
                text={text}
                icon={expand
                    ? expandIcon
                    : icon}
                onClick={handleClick}
            />
            <div className={styles.Content}>
                {children}
            </div>
        </div>
    )
}
