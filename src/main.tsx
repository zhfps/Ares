import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './samples/node-api'
import './index.css'
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <FluentProvider theme={teamsLightTheme}>
            <App />
        </FluentProvider>,
    </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
