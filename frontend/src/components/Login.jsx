import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Login() {
    const [user, setUser] = useState({
        username: "",
        password: "",
    })
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(user);
        setUser({
            username: "",
            password: "",
        })
    }
    return (
        <div className='min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
                <h1 className='text-3xl font-bold text-center text-black'>Login</h1>
                <form onSubmit={onSubmitHandler} action=''>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Username</span>
                        </label>
                        <input
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            className='w-full input input-bordered h-10'
                            type="text"
                            placeholder='Username' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Password</span>
                        </label>
                        <input
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            className='w-full input input-bordered h-10'
                            type="password"
                            placeholder='Password' />
                    </div>
                    <p className='text-black text-center my-2'>New User? <Link to="/register">Register</Link></p>
                    <div>
                        <button className='btn btn-block btn-md mt-2 border border-slate-700' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;