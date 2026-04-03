import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import MfeDashboard from './MfeDashboard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MfeDashboard/>
  </StrictMode>,
)
