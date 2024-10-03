import { ResourceListElement } from '../types.ts'

export const updateResourceList = (
    list: ResourceListElement[],
    itemId: number | string,
): ResourceListElement[] => {
    return list.map(item => {
        const isCurrentItem = item.id === itemId

        if (isCurrentItem) {
            return { ...item, opened: !item.opened }
        } else if (item.children && item.children.length > 0) {
            return { ...item, children: updateResourceList(item.children, itemId) }
        }

        return item
    })
}
