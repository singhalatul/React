import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({children,authentication=true}){
    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector((state)=>state.auth.status)

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("login")
        }
        else if(!authentication && authStatus!== authentication){
            navigate("")
        }
        setLoader(false)
    },[authStatus,navigate,authentication])

    return loader?<div className=' rounded-full border-spacing-4 border-t-4 border-blue-700 w-40 h-40 animate-spin'>
    </div>:<>{children}</>
}


