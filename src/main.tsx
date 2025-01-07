import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main_page from './page/main-page.tsx'
import Contact from './page/contact.tsx'
import Project from './page/project.tsx'
import About from './page/about.tsx'
import Nav from './page/nav.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([{
  path:'/',
  element: <Nav/>,
  errorElement:<div> shit </div>,
  children:[
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/project',
      element:<Project/>
    },
    {
      path:'/about',
      element:<About/>
    },

  ]
},


]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
