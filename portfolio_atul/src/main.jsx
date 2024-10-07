import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import App from './App'
import Home from './Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import {createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}> 
      <Route path='' element={<Home />}/>
      <Route path='/project' element={<Project />}/>
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />}/>
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
