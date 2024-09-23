import type { FC } from 'react'

import { SidebarList } from 'components/SidebarList'
import type { SidebarListItem } from 'components/SidebarList/type'
import { getSidebarData } from 'utils/Sidebar/getSidebarData'

import styles from './Sidebar.module.css'

export interface SidebarProps {
    folders: SidebarListItem[];
    content: SidebarListItem[][];
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { folders, content } = props
    const sidebarData = getSidebarData(folders, ...content)

    return (
        <div className={styles.Sidebar} >
            <SidebarList
                listData={sidebarData}
            />
        </div>
    )
}
