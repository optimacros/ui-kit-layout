import { FC, JSX } from 'react'

import { SidebarListItem } from './SidebarListItem'
import { SidebarSubList } from './SidebarSubList'
import iconFolderClose from 'icons/icon-folder-close.svg'
import iconFolderOpen from 'icons/icon-folder-open.svg'
import { ListItem } from 'types/SidebarItem'

import styles from './SidebarList.module.css'

interface SidebarListProps {
  listData: ListItem[];
}

export const SidebarList: FC<SidebarListProps> = (props) => {
    const { listData } = props

    const renderListItem = (
        listItem: ListItem,
        nestingLevel = 1,
    ): JSX.Element => {
        if (listItem.expand?.length) {
            return (
                <SidebarSubList
                    nestingLevel={nestingLevel}
                    key={listItem.id}
                    text={listItem.name}
                    icon={iconFolderClose}
                    expandIcon={iconFolderOpen}
                    isExpand={false}
                >
                    {listItem.expand.map((item) =>
                        renderListItem(item, nestingLevel + 1),
                    )}
                </SidebarSubList>
            )
        }

        return (
            <SidebarListItem
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
        <div className={styles.SidebarList}>
            {listData.map((item) => renderListItem(item))}
        </div>
    )
}
