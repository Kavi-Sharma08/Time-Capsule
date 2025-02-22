import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import About from './components/About'
import { createBrowserRouter } from 'react-router-dom'
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
      }

    ]
  },
  
])

export default App
