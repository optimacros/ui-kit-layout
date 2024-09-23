import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'

import { HeaderUserMenu } from './HeaderUserMenu'
import * as HeaderNotificationStories from '../HeaderNotification/HeaderNotification.stories'
import iconUser from 'icons/icon-user.svg'

const meta: Meta<typeof HeaderUserMenu> = {
    component: HeaderUserMenu,
    title: 'UI Kit layout/HeaderUserMenu',
    argTypes: {
        notification: {
            description: 'Notification info',
            control: 'object',
        },
    },
}

export default meta

type Story = StoryObj<typeof HeaderUserMenu>

const Wrapper = ({ children }: {children: ReactNode}) => {
    return (
        <div style={{ backgroundColor: 'var(--primary-color)', color: '#fff' }}>
            {children}
        </div>
    )
}

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

export const Basic:Story = {
    args: {
        elements: userElements,
        notification: HeaderNotificationStories.Basic.args?.notification,
    },
    decorators: [
        (story) => <Wrapper>{story()}</Wrapper>,
    ],
}
