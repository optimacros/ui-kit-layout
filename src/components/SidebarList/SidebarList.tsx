import { FC, JSX } from 'react'

import { SidebarListItem as SidebarListItemComponent } from './SidebarListItem'
import { SidebarSubList } from './SidebarSubList'
import { SidebarListItem } from './type'
import iconFolderClose from 'icons/icon-folder-close.svg'
import iconFolderOpen from 'icons/icon-folder-open.svg'

import styles from './SidebarList.module.css'

interface SidebarListProps {
  listData: SidebarListItem[];
}

export const SidebarList: FC<SidebarListProps> = (props) => {
    const { listData } = props

    const renderListItem = (
        listItem: SidebarListItem,
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
            <SidebarListItemComponent
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
