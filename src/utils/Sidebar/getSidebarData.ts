import type { ListItem } from 'components/List/List'

import { getRootFolders } from './getRootFolders'

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
