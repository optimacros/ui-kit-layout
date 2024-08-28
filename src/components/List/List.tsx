import { JSX } from 'react'

import { ListItem as ListItemComponent } from './ListItem'
import { SubList } from './SubList'
import iconFolderClose from 'icons/icon-folder-close.svg'
import iconFolderOpen from 'icons/icon-folder-open.svg'
import { ListItem } from 'types/SidebarItem'

import styles from './List.module.css'

interface ListProps {
    listData: ListItem[];
}

export function List(props: ListProps): JSX.Element {
    const { listData } = props

    const renderListItem = (listItem: ListItem, nestingLevel = 1): JSX.Element => {
        if (listItem.expand?.length) {
            return (
                <SubList
                    nestingLevel={nestingLevel}
                    key={listItem.id}
                    text={listItem.name}
                    icon={iconFolderClose}
                    expandIcon={iconFolderOpen}
                    isExpand={false}
                >
                    {listItem.expand.map(item => renderListItem(item, nestingLevel + 1))}
                </SubList>
            )
        }

        return (
            <ListItemComponent
                nestingLevel={nestingLevel}
                key={listItem.id}
                href={listItem.href}
                icon={listItem.icon}
                text={listItem.name}
                active={listItem.active}
                adminUrl={listItem.adminUrl}
            />
        )
    }

    return (
        <div className={styles.List}>
            {listData.map(item => renderListItem(item))}
        </div>
    )
}
