import { Meta, StoryObj } from '@storybook/react'
import { ReactNode } from 'react'

import { Header } from './Header'

const meta: Meta<typeof Header> = {
    component: Header,
    argTypes: {
        children: {
            description: 'Place for header elements',
        },
    },
}

export default meta

type Story = StoryObj<typeof Header>

const Wrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div style={{ clipPath: 'xywh(0px 1px 100% 120%)' }} >
            {children}
        </div>
    )
}

export const Basic: Story = {
    args: {
        children: 'Header',
    },
    decorators: [
        (story) => <Wrapper>{story()}</Wrapper>,
    ],
}
