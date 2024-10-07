import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";


const Contact = () => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [message,setMessage] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()
        
    }
    return (
        <div className=" relative inset-y-0 flex  items-center md:min-h-screen justify-center  sm:pt-0 ">
                <div className="w-full lg:max-w-screen-lg h-full mx-auto px-5 md:max-w-screen-md max-w-96">
                    <div className='mt-6 overflow-hidden'>
                        <div className='md:grid grid grid-cols-1 md:grid-cols-2 space-y-10'>
                            {/*left side wala */}
                            <div className=" text-white shadow border-spacing-2 outline-none bg-gray-800 text-sm font-serif rounded-md mt-6 md:mt-0 md:h-full h-80">
                                <h2 className='text-green-300 md:text-xl font-semibold font-serif pl-5 text-start md:pt-8 pt-2 text-sm'>Let`s work together</h2>
                                <p className="mt-2 pl-5 pr-1 w-full text-start text-sm">I’d love to hear from you! Whether you have a question, want to discuss a project, or just want to connect, feel free to reach out.</p>
                                <form className="md:space-y-5 md:mt-9 md:mb-7 space-y-3 mt-3 mb-2 ">
                                    <div className="flex space-x-10 items-center justify-center px-4 ">
                                        <input
                                        className="bg-transparent border border-green-300 w-full px-2 py-1"
                                        type="text"
                                        value={firstName}
                                        placeholder="Firstname"
                                        onChange={(e)=>setFirstName(e.target.value)}
                                        ></input>
                                        <input
                                        className="bg-transparent border border-green-300 w-full px-2 py-1"
                                        type="text"
                                        value={lastName}
                                        placeholder="Lastname"
                                        onChange={(e)=>setLastName(e.target.value)}
                                        ></input>
                                    </div>
                                    <div className="flex space-x-10 items-center justify-center px-4 ">
                                        <input
                                        className="bg-transparent border border-green-300 w-full px-2 py-1 "
                                        value={email}
                                        type="email"
                                        placeholder="Email"
                                        onChange={(e)=>setEmail(e.target.value)}
                                        ></input>
                                        <input
                                        className="bg-transparent border border-green-300 w-full mx-4 px-2 py-1"
                                        value={phone}
                                        min="0"
                                        max="10"
                                        type="number"
                                        placeholder="Phone number"
                                        onChange={(e)=>setPhone(e.target.value)}
                                        ></input>
                                    </div>
                                    <div className="flex items-start px-4 w-full">
                                        <textarea
                                        type="text"
                                        className="w-full bg-transparent border border-green-300 md:h-28 h-20 px-2 py-2  "
                                        value={message}
                                        placeholder="Type your message here"
                                        onChange={(e)=>setMessage(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <button
                                    onClick={handleSubmit}
                                    className="text-black bg-green-300 hover:bg-green-500 duration-300 mx-5 rounded-xl px-3 py-2 text-[10px] font-bold text-center  "
                                    >Send Message</button>
                                </form>
                            </div>
                            {/*right side div*/}
                            <div className='text-white ml-3'>
                                <div className="flex flex-col justify-center h-full md:space-y-4 space-y-2 px-10">
                                    <div className='flex'>
                                        <div className="px-3 py-1 bg-gray-700 text-green-300  flex items-center justify-center rounded-lg"><FaPhoneAlt size={16} />
                                        </div>
                                        <div className="w-full px-5">
                                            <h3 className='text-green-300 text-sm font-serif'>phone</h3>
                                            <p className="text-green-300" >(+91)7737141008</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className="py-1 bg-gray-700 text-green-300  flex items-center justify-center px-3 rounded-lg"><MdEmail size={16} />
                                        </div>
                                        <div className=" px-5 w-full">
                                            <h3 className='text-green-300 text-sm font-serif'>Email</h3>
                                            <p className="text-green-300" >atul.aggarwal2852@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        
                                            <div className="py-1 bg-gray-700 text-green-300  flex items-center justify-center px-2 rounded-lg"><IoLocation size={24} />
                                        </div>
                                        <div className="w-full px-5">
                                            <h3 className='text-green-300 text-sm font-serif'>Address</h3>
                                            <p className="text-green-300" >NeemKaThana,332713
                                            </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
