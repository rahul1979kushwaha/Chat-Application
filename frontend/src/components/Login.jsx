import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className='min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
                <h1 className='text-3xl font-bold text-center text-black'>Login</h1>
                <form action=''>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Username</span>
                        </label>
                        <input className='w-full input input-bordered h-10' type='text' placeholder='Enter Username'></input>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Password</span>
                        </label>
                        <input className='w-full input input-bordered h-10' type='password' placeholder='Enter Password'></input>
                    </div>
                    <p className='text-black text-center my-2'>New User? <Link to="/register">Register</Link></p>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;