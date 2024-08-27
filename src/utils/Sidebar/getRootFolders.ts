import type { ListItem } from 'widgets/List/List'

export function getRootFolders(
    folders: ListItem[],
    sidebarContent: ListItem[][],
    insideExpand = false,
): ListItem[] {
    const rootFolders: ListItem[] = []

    folders.forEach(folder => {
        const shouldFolderSetToRootStructure = (folder.folderId === null && !insideExpand)
            || (folder.folderId !== null && insideExpand)

        if (!shouldFolderSetToRootStructure) {
            return
        }

        const folderContent: ListItem[] = []
        const filterItems = (item: ListItem) => item.folderId === folder.id

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
