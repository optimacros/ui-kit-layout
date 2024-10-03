import { SidebarElement } from '../types.ts'
import { ResourceListElement } from 'components/ResourceList/types.ts'

export function getSidebarNestedList(
    rootElements: SidebarElement[],
    sidebarContent: SidebarElement[][],
    insideExpand = false,
): ResourceListElement[] {
    const rootFolders: ResourceListElement[] = []

    rootElements.forEach(rootElement => {
        const shouldSetToRootStructure = (rootElement.rootId === null && !insideExpand)
            || (rootElement.rootId !== null && insideExpand)

        if (!shouldSetToRootStructure) {
            return
        }

        const rootElementContent: ResourceListElement[] = []
        const filterItems = (item: SidebarElement) => item.rootId === rootElement.id

        const subFolders = rootElements.filter(filterItems)

        if (subFolders.length !== 0) {
            const subFoldersContent = getSidebarNestedList(subFolders, sidebarContent, true)
            rootElementContent.push(...subFoldersContent)
        }

        sidebarContent.forEach(sidebarContentList => {
            const rootContentList = sidebarContentList.filter(filterItems).map(item => {
                const { rootId, ...data } = item

                return {
                    ...data,
                    opened: false,
                    selected: false,
                } as ResourceListElement
            })
            rootElementContent.push(...rootContentList)
        })

        const { rootId, ...data } = rootElement

        rootFolders.push({
            ...data,
            opened: false,
            selected: false,
            children: rootElementContent,
        } as ResourceListElement)
    })

    return rootFolders
}
