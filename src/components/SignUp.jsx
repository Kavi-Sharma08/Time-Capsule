import React from 'react'
import { Button } from './ui/button'
const SignUp = () => {
  return (
    <div className='w-[70%] h-[60%] mx-auto my-7 bg-slate-300'>
      <form>
      <div className='flex flex-col justify-center items-center'>
          <div className='m-2 '>
          <input className='border border-black p-2' type="text" id="Name" placeholder='Enter Name' />

          </div>
          <div className='m-2'>
          <input className='border border-black p-2' type="text" id="Email"
          placeholder='Enter your Email' />

          </div>
          <div className='m-2'>
          <input className='border border-black p-2' type="password" id="Password" placeholder='Enter your Password' />

          </div>
          
          <Button className = 'm-2'>Sign up</Button>
          
        </div>
        
      </form>
        
    </div>
  )
}

export default SignUp