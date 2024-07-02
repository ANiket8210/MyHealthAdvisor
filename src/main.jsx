import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Services from './Services.jsx'
import Operation_centers from './Operation_centers.jsx'
import Contact_us from './Contact_us.jsx'
import SignInPage from './SignInPage.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/profile/:username",
    element:<App/>
  },
  {
    path:"/services",
    element: <Services/>
  },
  {
    path:"/operation_centers",
    element:<Operation_centers/>
  },
  {
    path:"/contact_us",
    element:<Contact_us/>
  },
  {
    path:"/sign-in",
    element:<SignInPage btn="sign-in" btnlink="sign-up" />
  },
  {
    path:"/sign-up",
    element:<SignInPage btn="sign-up" btnlink="sign-in" />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
