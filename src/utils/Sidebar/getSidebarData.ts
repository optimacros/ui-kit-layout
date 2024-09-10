import { getRootFolders } from './getRootFolders'
import { SidebarListItem } from 'components/SidebarList/type'

export function getSidebarData(
    folders: SidebarListItem[],
    ...sidebarContent: SidebarListItem[][]
): SidebarListItem[] {
    const rootSidebarContent: SidebarListItem[][] = sidebarContent.map(sidebarContentList =>
        sidebarContentList.filter(item => item.folderId === null),
    )

    return [
        ...getRootFolders(folders, sidebarContent),
        ...rootSidebarContent.flat(),
    ]
}
