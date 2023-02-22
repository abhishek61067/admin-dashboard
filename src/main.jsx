import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/theme'
import { MenuProvider } from './context/menu'
import { ProfileIconProvider } from './context/ProfileIcon'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <MenuProvider>
        <ProfileIconProvider>
    <App />
        </ProfileIconProvider>
      </MenuProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
