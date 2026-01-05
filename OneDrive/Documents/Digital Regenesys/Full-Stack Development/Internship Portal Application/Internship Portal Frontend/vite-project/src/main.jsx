import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'home',
        Component: Home
      },
      {
        path: 'signup',
        Component: SignUp
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'applications',
        Component: Applications
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
