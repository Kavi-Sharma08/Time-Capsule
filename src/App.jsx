import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import About from './components/About'
import { createBrowserRouter } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Profile from './components/Profile'
import Home from './components/Home'
import appStore from './components/utils/appStore'
import { Provider } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [Home, setHome] = useState(true)
 return (

    <>
      <div className='w-screen h-screen'>
        
        
        <Provider store = {appStore}>
          <Header/>
          
          <Outlet/>
        </Provider>
        

      </div>
      
      
    </>
  )
}
export const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/Signup",
        element : <SignUp/>
      },
      {
        path : "/login",
        element : <Login/>

      },
      {
        path : "/profile",
        element : <Profile/>
      },
      {
        path : "/Home",
        element : <Home/>
      }

    ],
    
    
  },
  {
    path : "/error",
    element : <Error/>

  }
  
])

export default App
