import { Footer, Header, Sidebar } from 'components'
import iconApp from 'icons/icon-app.svg'
import iconFolderClose from 'icons/icon-folder-close.svg'
import iconUser from 'icons/icon-user.svg'
import iconWorkspace from 'icons/icon-workspace.svg'
import { ListItem } from 'types/SidebarItem'

import style from './App.module.css'

const elements = [
    {
        id: '1',
        icon: 'list',
        title: 'AM Landing (Applications)',
        disabled: false,
        open: () => console.log('click'),
    },
    {
        id: '2',
        title: 'Tasks manager',
        disabled: false,
        open: () => console.log('click'),
    },
    {
        id: '3',
        title: 'Task output',
        disabled: false,
        open: () => console.log('click'),
    },
    {
        id: '4',
        title: 'General parameters',
        disabled: false,
        open: () => console.log('click'),
    },
    {
        id: '5',
        title: 'Security Center',
        disabled: true,
    },
    {
        id: '6',
        title: 'Help',
        disabled: false,
        children: [
            {
                id: '7',
                icon: 'help_outline',
                title: 'App Version',
                disabled: false,
                open: () => console.log('click'),
            },
        ],
    },
]

const userElements = [
    {
        id: '10',
        title: 'User Name',
        icon: iconUser,
        disabled: false,
        children: [
            {
                id: '11',
                icon: iconUser,
                title: 'Profile',
                disabled: false,
                open: () => console.log('click'),
            },
            {
                id: '12',
                icon: 'help_outline',
                title: 'App version',
                disabled: false,
                open: () => console.log('click'),
            },
            {
                id: '13',
                icon: 'settings',
                title: 'Settings',
                disabled: false,
                open: () => console.log('click'),
            },
            {
                id: '14',
                icon: 'input',
                title: 'Log Out',
                disabled: false,
                open: () => console.log('click'),
            },
        ],
    },
]

const notification = {
    unreadCount: 0,
    active: false,
    visible: true,
    toggle: () => console.log('toggle'),
}

// Sidebar mock

const foldersMock: ListItem[] = [
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

const workspacesMock: ListItem[] = [
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
const appManagersMock: ListItem[] = [
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

function App() {
    return (
        <div className={style.App}>
            <div className={style.HeaderWrapper}>
                <Header
                    elementsMenu={elements}
                    elementsUserMenu={userElements}
                    notification={notification}
                />
            </div>
            <div className={style.MainWrapper}>
                <div className={style.ContentWrapper}>
                    <main className={style.Main}>
                        <h1>MAIN CONTENT</h1>
                    </main>
                    <Footer appVersion="1.0.0" />
                </div>
                <div className={style.SidebarWrapper}>
                    <Sidebar
                        folders={foldersMock}
                        content={[workspacesMock, appManagersMock]}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
