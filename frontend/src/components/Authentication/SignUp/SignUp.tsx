import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import UseSignUp from '../../hooks/UseSignUp';

const SignUp = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const {loading,signup} = UseSignUp();

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        await signup(fullname,email,password,confirmPassword);
    }
  return (
    <div className=' bg-[#FFF2E0] w-[100vw] h-[100vh] flex flex-row-reverse'>
        <div className='bg-[#C0C9EE] w-1/2 h-full pl-[4rem]'>
            <h1 className='text-[150px] text-[#333333]'>Sign Up</h1>
            <h2 className='text-3xl text-[#333333]'>Please enter your credentials</h2>

            {/* login credentials */}
            <div className=' bg-[#E0E5FB] w-8/9 h-[45vh] p-4 flex flex-col  gap-4 justify-around my-[4rem] rounded-2xl'>
                <form action="submit" onSubmit={handleSubmit} method="post" className='flex gap-8 flex-wrap'>
                    <label htmlFor="name" className='flex flex-col gap-[1rem] w-[20rem]'>
                        <p className='text-2xl'>Full Name</p>
                        <input onChange={(e)=>setFullname(e.target.value)} type="text" placeholder='Enter your Full Name' className='border-[#333333] border-b-2 outline-0'/>
                    </label>
                    <label htmlFor="email" className='flex flex-col gap-[1rem] w-[20rem]'>
                        <p className='text-2xl'>Email</p>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your Email' className='border-[#333333] border-b-2 outline-0'/>
                    </label>
                    <label htmlFor="password" className='flex flex-col gap-[1rem] w-[20rem]'>
                        <p className='text-2xl'>Password</p>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter your Password' className='border-[#333333] border-b-2 outline-0'/>
                    </label>
                    <label htmlFor="password" className='flex flex-col gap-[1rem] w-[20rem]'>
                        <p className='text-2xl'>Confirm Password</p>
                        <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder='Confirm your Password' className='border-[#333333] border-b-2 outline-0'/>
                    </label>
                    <div className='flex w-full justify-evenly items-center'>
                        {/* Sign up routing */}
                        <p>Have an account? <Link to={'/login'}><span className='text-[#898AC4] font-bold hover:text-[#333] cursor-pointer'>Click here</span></Link></p>
                        <button type="submit" className='bg-[#898AC4] p-1 rounded-2xl text-[#E0E5FB] w-[20rem] cursor-pointer'>
                            {loading ? <span className='loading loading-spinner'></span>: "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className='w-1/2 bg-gradient-to-r from-[#E0E5FB] to-[#E6EAFB] flex justify-center items-center'>
            <img src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default SignUp