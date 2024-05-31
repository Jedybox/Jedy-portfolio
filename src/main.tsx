import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Projects from './pages/Projects.tsx'
import Background from './pages/Background.tsx'
import Contact from './pages/Contact.tsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/background',
        element: <Background />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
