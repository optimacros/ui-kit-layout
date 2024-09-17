import { Preview } from '@storybook/react'

import '../src/styles/DefaultColorTheme.css';

import '../src/styles/colors.css'
import '../src/styles/variables.css'
import '../src/styles/media.css'
import '../src/styles/config.css'

import '../src/styles/Normalize.css'
import '../src/styles/DefaultColorTheme.css'
import '../src/styles/Application.css'
import '../src/styles/Fonts.css'

export const parameters: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    }
}
