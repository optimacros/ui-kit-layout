import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'

import { HeaderMenu } from './HeaderMenu'

const meta: Meta<typeof HeaderMenu> = {
    component: HeaderMenu,
    title: 'UI Kit layout/HeaderMenu',
    argTypes: {
        elements: {
            description: 'Header menu element list',
            control: 'object',
        },
        className: {
            description: 'Custom styles',
            control: 'object',
        },
    },
}

export default meta

type Story = StoryObj<typeof HeaderMenu>

const Wrapper = ({ children }: {children: ReactNode}) => {
    return (
        <div style={{ backgroundColor: 'var(--primary-color)', width: 'fit-content', color: '#fff' }}>
            {children}
        </div>
    )
}

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

export const Basic: Story = {
    args: {
        elements: elements,
        className: '',
    },
    decorators: [
        (story) => <Wrapper>{story()}</Wrapper>,
    ],
}
