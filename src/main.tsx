import React from 'react'
import { createRoot } from 'react-dom/client'

import './styles/colors.css'
import './styles/variables.css'
import './styles/media.css'
import './styles/config.css'

import './styles/Normalize.css'
import './styles/DefaultColorTheme.css'
import './styles/Application.css'
import './styles/Fonts.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
