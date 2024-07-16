import React from 'react'
import {Link} from 'react-router-dom'
function Signup() {
    return (
        <div className='min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
                <h1 className='text-3xl font-bold text-center text-black'>Signup</h1>
                <form action=''>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Full Name</span>
                        </label>
                        <input className='w-full input input-bordered h-10' type='text' placeholder='Enter name'></input>
                    </div>
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
                        <input className='w-full input input-bordered h-10' type='text' placeholder='Enter Password'></input>
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Confirm Password</span>
                        </label>
                        <input className='w-full input input-bordered h-10' type='text' placeholder='Re-Enter password'></input>
                    </div>
                    <div className='flex items-center my-4'>
                        <div className='flex items-center'>
                            <p className='text-black'>Male</p>
                            <input type="checkbox" defaultChecked className="checkbox mx-2" />
                        </div>
                        <div className='flex items-center mx-4'>
                            <p className='text-black'>Female</p>
                            <input type="checkbox" defaultChecked className="checkbox mx-2" />
                        </div>
                    </div>
                    <Link to="/login">
                        
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;