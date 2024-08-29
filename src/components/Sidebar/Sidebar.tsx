import { Component, ReactNode } from 'react'

import { List } from 'components/List/List'
import { ListItem } from 'types/SidebarItem'
import { getSidebarData } from 'utils/Sidebar/getSidebarData'

import styles from './Sidebar.module.css'

interface Props {
    folders: ListItem[];
    content: ListItem[][];
}

export class Sidebar extends Component<Props> {
    render(): ReactNode {
        const { folders, content } = this.props
        const sidebarData = getSidebarData(folders, ...content)

        return (
            <div className={styles.Sidebar} >
                <List
                    listData={sidebarData}
                />
            </div>
        )
    }
}
