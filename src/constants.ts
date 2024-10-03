import iconUser from 'icons/icon-user.svg'

export const KEY_CODES = {
    SPACE: 32,
    ESC: 27,
    ENTER: 13,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
}

export const elements = [
    {
        id: '1231',
        icon: 'list',
        title: 'AM Landing (Applications)',
        disabled: false,
        // eslint-disable-next-line no-console
        open: () => console.log('click'),
    },
    {
        id: '2312313',
        title: 'Tasks manager',
        disabled: false,
        // eslint-disable-next-line no-console
        open: () => console.log('click'),
    },
    {
        id: '34324',
        title: 'Task output',
        disabled: false,
        // eslint-disable-next-line no-console
        open: () => console.log('click'),
    },
    {
        id: '41312321',
        title: 'General parameters',
        disabled: false,
        // eslint-disable-next-line no-console
        open: () => console.log('click'),
    },
    {
        id: '342342345',
        title: 'Security Center',
        disabled: true,
    },
    {
        id: '4242346',
        title: 'Help',
        disabled: false,
        children: [
            {
                id: '7432432432',
                icon: 'help_outline',
                title: 'App Version',
                disabled: false,
                // eslint-disable-next-line no-console
                open: () => console.log('click'),
            },
        ],
    },
]

export const userElements = [
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

export const notification = {
    unreadCount: 3,
    active: false,
    visible: true,
    // eslint-disable-next-line no-console
    toggle: () => console.log('toggle'),
}

// Sidebar mock
// todo export Этого всего добра
export const foldersMock = [
    {
        rootId: null,
        type: 'Folder',
        label: 'Folder 1',
        id: 123423,
        icon: 'Folder',
        onClick: () => console.log('Click Folder 1'),
    },
    {
        rootId: null,
        type: 'Folder',
        label: 'Folder 2',
        id: 42432,
        icon: 'Folder',
        onClick: () => console.log('Click Folder 2'),

    },
    {
        rootId: 123423,
        type: 'Folder',
        label: 'Folder 3',
        id: 3432324,
        icon: 'Folder',
        onClick: () => console.log('Click Folder 3'),

    },
    {
        rootId: null,
        type: 'Folder',
        label: 'Folder 4',
        id: 43232324,
        icon: 'Folder',
        onClick: () => console.log('Click Folder 4'),
    },
]

export const workspacesMock = [
    {
        rootId: 123423,
        type: 'Workspace',
        label: 'Workspace 1',
        id: 1432423432,
        href: '#',
        icon: 'Workspace',
        onClick: () => console.log('Click Workspace 1'),
    },
    {
        rootId: 42432,
        type: 'Workspace',
        label: 'Workspace 2',
        id: 24324323,
        href: '#',
        icon: 'Workspace',
        onClick: () => console.log('Click Workspace 2'),
    },
    {
        rootId: null,
        type: 'Workspace',
        label: 'Workspace 3',
        id: 3434234242423,
        href: '#',
        icon: 'Workspace',
        settingHref: '#',
        onClick: () => console.log('Click Workspace 3'),
        settingOnClick: () => console.log('Setting Click'),
    },
    {
        rootId: 42432,
        type: 'Workspace',
        label: 'Workspace 4',
        id: 375635352,
        href: '#',
        icon: 'Workspace',
        onClick: () => console.log('Click Workspace 4'),
    },
]
export const appManagersMock = [
    {
        rootId: 123423,
        type: 'AM',
        label: 'AM 1',
        id: 1132335,
        href: '#',
        icon: 'AM',
        onClick: () => console.log('Click AM 1'),
    },
    {
        rootId: 42432,
        type: 'AM',
        label: 'AM 2',
        id: 3122432325,
        href: '#',
        icon: 'AM',
        onClick: () => console.log('Click AM 2'),
    },
    {
        rootId: 3432324,
        type: 'AM',
        label: 'AM 3',
        id: 3533653,
        href: '#',
        icon: 'AM',
        onClick: () => console.log('Click AM 3'),
    },
    {
        rootId: null,
        type: 'AM',
        label: 'AM 4',
        id: 41242432,
        href: '#',
        icon: 'AM',
        onClick: () => console.log('Click AM 4'),
    },
]
