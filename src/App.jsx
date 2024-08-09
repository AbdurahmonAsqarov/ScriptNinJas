import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ComponentLayout from './components/layout/ComponentLayout'
import Header from './components/home/header/Header'
import About from './components/page/About/About'
import Login from './components/page/login/Login'
import Sign from './components/page/Sign/Sign'
import IshgaJoy from './components/page/ish/IshgaJoy'
import Python from './components/page/python/Python'
const App = () => {

  const token = localStorage.getItem('token')

  const router = createBrowserRouter([
    {
      path:'/',
      element:<ComponentLayout/>,
      children:[
        {
          index:true,
          element:<Header/>
        },
        {
          path:'/About',
          element:<About/>
        },
        {
          path:'/Login',
          element:<Login/>
        },
        {
          path:'/SignUp',
          element:<Sign/>
        },
        {
          path:"/Ish",
          element: token ? <IshgaJoy/> : <Login />
        },
        {
          path:'/Python',
          element:<Python/>
        }
      ]
    }
  ])

  console.log("App token: ",token)

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
