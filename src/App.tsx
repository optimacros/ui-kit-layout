import { Footer, Header, HeaderMenu, HeaderUserMenu, Sidebar } from 'components'
import { SidebarListItem } from 'components/SidebarList/type'
import { ToggleIcon } from 'components/ToggleIcon/ToggleIcon'
import iconApp from 'icons/icon-app.svg'
import iconFolderClose from 'icons/icon-folder-close.svg'
import iconUser from 'icons/icon-user.svg'
import iconWorkspace from 'icons/icon-workspace.svg'

import style from './App.module.css'
import headerStyle from 'components/Header/Header.module.css'

const elements = [
    {
        id: '1',
        icon: 'list',
        title: 'AM Landing (Applications)',
        disabled: false,
        // eslint-disable-next-line no-console
        open: () => console.log('click'),
    },
    {
        id: '2',
        title: 'Tasks manager',
        disabled: false,
        // eslint-disable-next-line no-console
        open: () => console.log('click'),
    },
    {
        id: '3',
        title: 'Task output',
        disabled: false,
        // eslint-disable-next-line no-console
        open: () => console.log('click'),
    },
    {
        id: '4',
        title: 'General parameters',
        disabled: false,
        // eslint-disable-next-line no-console
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
                // eslint-disable-next-line no-console
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
                // eslint-disable-next-line no-console
                open: () => console.log('click'),
            },
            {
                id: '12',
                icon: 'help_outline',
                title: 'App version',
                disabled: false,
                // eslint-disable-next-line no-console
                open: () => console.log('click'),
            },
            {
                id: '13',
                icon: 'settings',
                title: 'Settings',
                disabled: false,
                // eslint-disable-next-line no-console
                open: () => console.log('click'),
            },
            {
                id: '14',
                icon: 'input',
                title: 'Log Out',
                disabled: false,
                // eslint-disable-next-line no-console
                open: () => console.log('click'),
            },
        ],
    },
]

const notification = {
    unreadCount: 0,
    active: false,
    visible: true,
    // eslint-disable-next-line no-console
    toggle: () => console.log('toggle'),
}

// Sidebar mock

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

const App = () => {
    return (
        <div className={style.App}>
            <div className={style.HeaderWrapper}>
                <Header>
                    <HeaderMenu
                        elements={elements}
                        className={headerStyle.HeaderMenu}
                    />

                    <HeaderUserMenu
                        elements={userElements}
                        notification={notification}
                    />

                    <ToggleIcon
                        wrapperClassName={headerStyle.ToggleIconWrapper}
                        iconClassName={headerStyle.ToggleIcon}
                    />
                </Header>
            </div>
            <div className={style.MainWrapper}>
                <div className={style.ContentWrapper}>
                    <main className={style.Main}>
                        <h1>MAIN CONTENT</h1>
                    </main>
                    <Footer appVersion="1.0.0">
                        &#xa9;Copyright Optimacros 2018 - {new Date().getFullYear()}
                    </Footer>
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
