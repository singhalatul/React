import React from 'react';
import { useState,useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }
    return (
        <div className='inline-block'>
            <h2 className="text-xl text-white mb-2 md:text-start text-center md:text-2xl">
                Login
            </h2>
            <div className='flex gap-2 flex-col md:flex md:flex-row'>

            <input type="text" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="username"
            className='w-full h-9 rounded-md p-2'
            >
            </input>
            {" "}
            <input type="text"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password"
            className='w-full h-9 rounded-md p-2'
            ></input>
            { " "}
            <button
            className="bg-black text-white rounded-xl px-2 py-0 "
            onClick={handleSubmit}
            >Submit</button>
            </div>
        </div>
    );
}

export default Login;
