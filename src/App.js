import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Username, Password, Register, Recovery, Reset, PageNotFound} from './components/index.js'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Username/>
  },
  {
    path: '/password',
    element: <Password/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/recovery',
    element: <Recovery/>
  },
  {
    path: '/reset',
    element: <Reset/>
  },
  {
    path: '*',
    element: <PageNotFound/>
  },
  
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App