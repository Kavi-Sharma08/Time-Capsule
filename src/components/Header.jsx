import React from 'react'
import { LOGO } from './utils/Constants'
const Header = () => {
  return (
    <div className='w-full h-[15%]'>
        <div className='w-full border-b-2 h-full'>
          <div className='h-full flex justify-between items-center'>
            <img src={LOGO} alt="Logo" className='h-full' />
            <div>
              <ul className='flex space-x-4 mx-10'>
                <li>Home</li>
                <li>About</li>
                <li>Sign In</li>
              </ul>
            </div>

          </div>
          
        </div>
    </div>
  )
}

export default Header