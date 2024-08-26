import React from 'react'

import { List } from 'components/List/List'
import { getSidebarData } from 'utils/Sidebar/getSidebarData'

import styles from './Sidebar.module.css'
import { ListItem } from 'types/SidebarItem';

interface Props {
    folders: ListItem[];
    content: ListItem[][];
}

export class Sidebar extends React.Component<Props> {
    render(): React.ReactNode {
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
