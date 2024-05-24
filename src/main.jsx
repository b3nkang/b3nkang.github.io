import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Titlecard from './Titlecard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="titlecard">
      <Titlecard />
    </div>
    <App />
  </React.StrictMode>,
)
