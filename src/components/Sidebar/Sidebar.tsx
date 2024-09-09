import { FC } from 'react'

import { SidebarList } from 'components/SidebarList'
import { ListItem } from 'types/SidebarItem'
import { getSidebarData } from 'utils/Sidebar/getSidebarData'

import styles from './Sidebar.module.css'

interface Props {
    folders: ListItem[];
    content: ListItem[][];
}

export const Sidebar: FC<Props> = (props) => {
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
