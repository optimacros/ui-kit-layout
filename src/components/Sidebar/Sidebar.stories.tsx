import { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar'
import { SidebarListItem } from 'components/SidebarList'
import iconApp from 'icons/icon-app.svg'
import iconFolderClose from 'icons/icon-folder-close.svg'
import iconWorkspace from 'icons/icon-workspace.svg'

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    argTypes: {
        folders: {
            description: 'Root sidebar list elements',
        },
        content: {
            description: 'Child sidebar list elements',
        },
    },
}

export default meta

type Story = StoryObj<typeof Sidebar>

const foldersMock: SidebarListItem[] = [
    {
        folderId: null,
        type: 'folder',
        name: 'Folder 1',
        id: 1,
        icon: iconFolderClose,
    },
    {
        folderId: null,
        type: 'folder',
        name: 'Folder 2',
        id: 2,
        icon: iconFolderClose,

    },
    {
        folderId: 1,
        type: 'folder',
        name: 'Folder 3',
        id: 3,
        icon: iconFolderClose,

    },
    {
        folderId: null,
        type: 'folder',
        name: 'Folder 4',
        id: 4,
        icon: iconFolderClose,

    },
]

const workspacesMock: SidebarListItem[] = [
    {
        folderId: 1,
        type: 'workspace',
        name: 'Workspace 1',
        id: 1,
        href: '#',
        icon: iconWorkspace,
    },
    {
        folderId: 2,
        type: 'workspace',
        name: 'Workspace 2',
        id: 2,
        href: '#',
        icon: iconWorkspace,
    },
    {
        folderId: null,
        type: 'workspace',
        name: 'Workspace 3',
        id: 3,
        href: '#',
        icon: iconWorkspace,
        adminUrl: '123/213',
    },
    {
        folderId: 3,
        type: 'workspace',
        name: 'Workspace 4',
        id: 4,
        href: '#',
        icon: iconWorkspace,
    },
]
const appManagersMock: SidebarListItem[] = [
    {
        folderId: 1,
        type: 'appManager',
        name: 'AM 1',
        id: 1,
        href: '#',
        icon: iconApp,
    },
    {
        folderId: 2,
        type: 'appManager',
        name: 'AM 2',
        id: 3,
        href: '#',
        icon: iconApp,
    },
    {
        folderId: 3,
        type: 'appManager',
        name: 'AM 3',
        id: 3,
        href: '#',
        icon: iconApp,
    },
    {
        folderId: null,
        type: 'appManager',
        name: 'AM 4',
        id: 4,
        href: '#',
        icon: iconApp,
    },
]

export const Basic: Story = {
    args: {
        folders: foldersMock,
        content: [workspacesMock, appManagersMock],
    },
}
