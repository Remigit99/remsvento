
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Layout from './components/Layout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Investing from "./pages/Investing"
import Options from "./pages/Options"
import Dashboard from "./pages/Dashboard"

const router = createBrowserRouter(
  [
      {
          path: "/",
          element: <Layout />,
          errorElement:   <ErrorPage/>,
          children:[
            {
              path: "/",
              element: <Home/>,
              index: true
            },
            {
              path: "/register",
              element: <Register/>
            },
            {
              path: "/login",
              element: <Login/>
            },
            {
              path: "/investing",
              element: <Investing/>
            },
            {
              path: "/options",
              element: <Options/>
            },
            {
              path: "/dashboard/:id",
              element: <Dashboard/>
            },
          ] 
      },


  ]
)



const App = () =>{


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
