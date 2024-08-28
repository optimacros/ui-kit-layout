import { getRootFolders } from './getRootFolders'
import type { ListItem } from 'components/List/List'

export function getSidebarData(
    folders: ListItem[],
    ...sidebarContent: ListItem[][]
): ListItem[] {
    const rootSidebarContent: ListItem[][] = sidebarContent.map(sidebarContentList =>
        sidebarContentList.filter(item => item.folderId === null),
    )

    return [
        ...getRootFolders(folders, sidebarContent),
        ...rootSidebarContent.flat(),
    ]
}
