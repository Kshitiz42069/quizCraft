import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import UseLogin from '../../hooks/UseLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {loading,login} = UseLogin();

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        await login(email,password)
    }
  return (
    <div className=' bg-[#FFF2E0] w-[100vw] h-[100vh] flex'>
        <div className='bg-[#C0C9EE] w-1/2 h-full pl-[4rem]'>
            <h1 className='text-[150px] text-[#333333]'>Login</h1>
            <h2 className='text-3xl text-[#333333]'>Please enter your credentials</h2>

            {/* login credentials */}
            <div className=' bg-[#E0E5FB] w-8/9 h-[40vh] p-4 flex flex-col gap-4 justify-around my-[4rem] rounded-2xl'>
                <form action="submit" onSubmit={handleSubmit} method="post" className='flex flex-col px-[3rem] gap-10'>
                    <label htmlFor="email" className='flex flex-col gap-[1rem] w-2/3'>
                        <p className='text-2xl'>Email</p>
                        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter your Email' className='border-[#333333] border-b-2 outline-0'/>
                    </label>
                    <label htmlFor="password" className='flex flex-col gap-[1rem] w-2/3'>
                        <p className='text-2xl'>Password</p>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter your Password' className='border-[#333333] border-b-2 outline-0'/>
                    </label>
                    <div className='flex justify-between '>
                        {/* Sign up routing */}
                        <div>
                            <p>Don't have an account? <Link to={'/signup'}><span className='text-[#898AC4] font-bold hover:text-[#333] cursor-pointer'>Click here</span></Link></p>
                        </div>
                        {/* forgot password */}
                        <div>
                            <p className='text-[#898AC4] hover:text-[#333] cursor-pointer font-bold'>Forgot Password</p>
                        </div>
                    </div>
                    {/* login button */}
                    <button type="submit" className='bg-[#898AC4] p-1 rounded-2xl text-[#E0E5FB] w-[20rem] mx-[10rem] cursor-pointer'>
                        {loading ? <span className='loading loading-spinner'></span>: "Login"}
                    </button>
                </form>

            </div>
        </div>
        <div className='w-1/2 bg-gradient-to-r from-[#E0E5FB] to-[#E6EAFB] flex justify-center items-center'>
            <img src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default Login