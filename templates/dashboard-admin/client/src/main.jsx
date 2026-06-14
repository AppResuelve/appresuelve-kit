import React from 'react'
import ReactDOM from 'react-dom/client'
import { AlertProvider } from './components/ui/AlertContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </React.StrictMode>,
)
