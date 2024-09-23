import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'

import { SidebarList } from './SidebarList'
import * as SidebarStories from '../Sidebar/Sidebar.stories'
import { getSidebarData } from 'utils'

const meta: Meta<typeof SidebarList> = {
    component: SidebarList,
    title: 'UI Kit layout/SidebarList',
    argTypes: {
        listData: {
            description: 'List elements',
            control: 'object',
        },
    },
}

export default meta

type Story = StoryObj<typeof SidebarList>

const Wrapper = ({ children }: {children: ReactNode}) => {
    return (
        <div style={{ backgroundColor: 'var(--primary-color)', width: 'fit-content', color: '#fff' }}>
            {children}
        </div>
    )
}

export const Basic: Story = {
    args: {
        listData: getSidebarData(
            SidebarStories.Basic.args?.folders ?? [],
            ...SidebarStories.Basic.args?.content ?? [],
        ),
    },
    decorators: [
        (story) => <Wrapper>{story()}</Wrapper>,
    ],
}
