import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Empform from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 />
    <Empform />
  </StrictMode>,
)
