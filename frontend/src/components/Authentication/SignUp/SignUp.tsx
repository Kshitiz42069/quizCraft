import React from 'react'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className=' bg-[#FFF2E0] w-[100vw] h-[100vh] flex flex-row-reverse'>
        <div className='bg-[#C0C9EE] w-1/2 h-full pl-[4rem]'>
            <h1 className='text-[150px] text-[#333333]'>Sign Up</h1>
            <h2 className='text-3xl text-[#333333]'>Please enter your credentials</h2>

            {/* login credentials */}
            <div className=' bg-[#E0E5FB] w-8/9 h-[45vh] p-4 flex flex-col  gap-4 justify-around my-[4rem] rounded-2xl'>
                <form action="submit" method="post" className='flex gap-8 flex-wrap'>
                    <label htmlFor="name" className='flex flex-col gap-[1rem] w-[20rem]'>
                        <p className='text-2xl'>Full Name</p>
                        <input type="text" placeholder='Enter your Full Name' className='border-[#333333] border-b-2 outline-0'/>
                    </label>
                    <label htmlFor="email" className='flex flex-col gap-[1rem] w-[20rem]'>
                        <p className='text-2xl'>Email</p>
                        <input type="email" placeholder='Enter your Email' className='border-[#333333] border-b-2 outline-0'/>
                    </label>
                    <label htmlFor="password" className='flex flex-col gap-[1rem] w-[20rem]'>
                        <p className='text-2xl'>Password</p>
                        <input type="password" placeholder='Enter your Password' className='border-[#333333] border-b-2 outline-0'/>
                    </label>
                    <label htmlFor="password" className='flex flex-col gap-[1rem] w-[20rem]'>
                        <p className='text-2xl'>Confirm Password</p>
                        <input type="password" placeholder='Confirm your Password' className='border-[#333333] border-b-2 outline-0'/>
                    </label>
                </form>
                <div className='flex justify-around items-center'>
                    {/* Sign up routing */}
                    <p>Have an account? <Link to={'/login'}><span className='text-[#898AC4] font-bold hover:text-[#333] cursor-pointer'>Click here</span></Link></p>
                    <button type="submit" className='bg-[#898AC4] p-1 rounded-2xl text-[#E0E5FB] w-[20rem]'>Sign Up</button>
                </div>
                {/* login button */}
            </div>
        </div>
        <div className='w-1/2 bg-gradient-to-r from-[#E0E5FB] to-[#E6EAFB] flex justify-center items-center'>
            <img src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default SignUp