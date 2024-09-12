import { Meta, StoryObj } from '@storybook/react'
import { ReactNode } from 'react'

import { HeaderNavigation } from './HeaderNavigation'

const meta: Meta<typeof HeaderNavigation> = {
    component: HeaderNavigation,
    argTypes: {
        title: {
            description: 'Header title',
        },
        onClick: {
            description: 'Action on click',
        },
    },
}

export default meta

type Story = StoryObj<typeof HeaderNavigation>

const Wrapper = ({ children }: {children: ReactNode}) => {
    return (
        <div style={{ backgroundColor: 'var(--primary-color)', width: 'fit-content' }}>
            {children}
        </div>
    )
}

export const Basic:Story = {
    args: {
        // eslint-disable-next-line no-console
        onClick: () => console.log('click'),
        title: 'Title',
    },
    decorators: [
        (story) => <Wrapper>{story()}</Wrapper>,
    ],
}
