import { Preview } from '@storybook/react'

import '../src/themes/appBaseTheme.css'
import '../src/fonts/fonts.css'
import '../src/main.css'


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
