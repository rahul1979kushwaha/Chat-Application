import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Signup() {
    const [user,setUser]=useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:"",
    })
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(user);
    }
    return (
        <div className='min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
                <h1 className='text-3xl font-bold text-center text-black'>Signup</h1>
                <form onSubmit={onSubmitHandler} action=''>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Full Name</span>
                        </label>
                        <input className='w-full input input-bordered h-10' type='text' placeholder='Enter name' value={user.fullName} onChange={(e)=>setUser({...user,fullName:e.target.value})}></input>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Username</span>
                        </label>
                        <input className='w-full input input-bordered h-10' type='text' placeholder='Enter Username' value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}></input>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Password</span>
                        </label>
                        <input className='w-full input input-bordered h-10' type='password' placeholder='Enter Password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}></input>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Confirm Password</span>
                        </label>
                        <input className='w-full input input-bordered h-10' type='password' placeholder='Re-Enter password' value={user.confirmPassword} onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}></input>
                    </div>
                    <div className='flex items-center my-4'>
                        <div className='flex items-center'>
                            <p className='text-black'>Male</p>
                            <input type="checkbox" defaultChecked className="checkbox mx-2" value={user.gender} />
                        </div>
                        <div className='flex items-center mx-4'>
                            <p className='text-black'>Female</p>
                            <input type="checkbox" defaultChecked className="checkbox mx-2" value={user.gender} />
                        </div>
                    </div>
                    <p className='text-black text-center my-2'>Already have an account? <Link to="/login">Login</Link></p>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;