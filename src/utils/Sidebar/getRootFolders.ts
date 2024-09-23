import type { SidebarListItem } from 'components/SidebarList/type'

export function getRootFolders(
    folders: SidebarListItem[],
    sidebarContent: SidebarListItem[][],
    insideExpand = false,
): SidebarListItem[] {
    const rootFolders: SidebarListItem[] = []

    folders.forEach(folder => {
        const shouldFolderSetToRootStructure = (folder.folderId === null && !insideExpand)
            || (folder.folderId !== null && insideExpand)

        if (!shouldFolderSetToRootStructure) {
            return
        }

        const folderContent: SidebarListItem[] = []
        const filterItems = (item: SidebarListItem) => item.folderId === folder.id

        const subFolders = folders.filter(filterItems)

        if (subFolders.length !== 0) {
            const subFoldersContent = getRootFolders(subFolders, sidebarContent, true)
            folderContent.push(...subFoldersContent)
        }

        sidebarContent.forEach(sidebarContentList => {
            const folderContentList = sidebarContentList.filter(filterItems)
            folderContent.push(...folderContentList)
        })

        rootFolders.push({
            ...folder,
            expand: folderContent,
        })
    })

    return rootFolders
}
