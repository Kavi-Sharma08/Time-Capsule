import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import About from './components/About'
import { createBrowserRouter } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
 return (
    <>
      <div className='w-screen h-screen'>
        <Header/>
        <Outlet/>

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
      }

    ]
  },
  
])

export default App
