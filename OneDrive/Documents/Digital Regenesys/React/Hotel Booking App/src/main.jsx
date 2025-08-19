import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import HotelProvider from './Context/Hotel/HotelProvider.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <HotelProvider>
        <App />
      </HotelProvider>
    </StrictMode>
  </BrowserRouter>,
)
