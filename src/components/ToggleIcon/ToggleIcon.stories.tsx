import { Meta, StoryObj } from '@storybook/react'
import { ReactNode, useState } from 'react'

import { ToggleIcon } from './ToggleIcon'

const meta: Meta<typeof ToggleIcon> = {
    component: ToggleIcon,
    argTypes: {
        isOpen: {
            description: 'Start status',
        },
        wrapperClassName: {
            description: 'Custom styles for wrapper',
        },
        iconClassName: {
            description: 'Custom styles for icon',
        },
        handleClick: {
            description: 'Click handler',
        },
    },
}

export default meta

type Story = StoryObj<typeof ToggleIcon>

const Wrapper = ({ children }: {children: ReactNode}) => {
    return (
        <div style={{ backgroundColor: 'var(--primary-color)', width: 'fit-content', color: '#fff' }}>
            {children}
        </div>
    )
}

export const Basic: Story = {
    render: ({ ...args }) => {
        const [value, setValue] = useState<boolean>(true)

        return (
            <ToggleIcon {...args}
                isOpen={value}
                handleClick={() => setValue((v) => !v)}
            />
        )
    },
    decorators: [
        (story) => <Wrapper>{story()}</Wrapper>,
    ],
}
