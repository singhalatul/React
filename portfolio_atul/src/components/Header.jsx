import React,{useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {CgNametag} from 'react-icons/cg'
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export default function Header() {
    const [toggle,setToggle] = useState(false)

    function openMenu(){
        setToggle(true)
    }
    function closeMenu(){
        setToggle(false)
    }
    return (
        <header className="shadow sticky z-50 top-4 ">
        
                <div className=" flex flex-wrap mx-auto justify-between items-center max-w-screen-lg lg:flex-row px-4">
                    <div>
                    <Link to="/" className="flex items-center">
                        <h1 className="flex items-center text-green-500 text-2xl tracking-wider"><CgNametag />Portfolio</h1>
                    </Link>
                    </div>
                    <div className='space-x-2'>
                        <div
                            className="hidden justify-between items-center w-full md:flex-row lg:flex lg:w-auto md:flex "
                            id="mobile-menu-2"
                            >
                            <ul className="flex font-medium lg:flex-row lg:space-x-1 lg:mt-0 md:flex-row md:space-x-1 ">
                                <li>
                                    <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                            `block duration-200 ${isActive ? "text-green-500" : "text-white"}  border-gray-100 rounded-full text-xl hover:bg-green-800 hover:text-green-300 px-3 py-2`
                                }
                                >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to="/project"
                                    className={({isActive}) =>
                                        `block duration-200 ${isActive ? "text-green-500" : "text-white"}  border-gray-100 rounded-full text-xl hover:bg-green-800 hover:text-green-300 px-3 py-2`
                                        }
                                        >
                                        Projects
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                        `block duration-200 ${isActive ? "text-green-500" : "text-white"}  border-gray-100 rounded-full text-xl hover:bg-green-800 hover:text-green-300 px-3 py-2`
                                }
                                >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to="/contact"
                                        className={({isActive}) =>
                                            `block duration-200 ${isActive ? "text-green-500" : "text-white"}  border-gray-100 rounded-full text-xl hover:bg-green-800 hover:text-green-300 px-3 py-2`
                                        }
                                        >
                                        Contact
                                    </NavLink>
                                </li> 
                            </ul>
                        </div>
                        <div className='ssm:hidden text-green-500 p-2 border border-green-400 md:hidden sm:block'>
                            {toggle? (<FiX size={26} onClick={closeMenu}/>):(<FiAlignJustify onClick={openMenu}  size={26} />)}
                            
                        </div>
                    </div>
                </div>
            
            <div>
                {toggle ?(
                    <div className=" flex justify-stretch ml-2 mt-5 mr-2 md:hidden lg:hidden border-b border-b-green-500 shadow-md ">
                    <ul className="flex flex-col items-start justify-start">
                <li>
                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block duration-200 ${isActive ? "text-green-500" : "text-white"}  border-gray-100 rounded-full text-xl hover:bg-green-800 hover:text-green-300 px-5 py-2`
                                }
                                >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to="/project"
                                    className={({isActive}) =>
                                        `block duration-200 ${isActive ? "text-green-500" : "text-white"}  border-gray-100 rounded-full text-xl hover:bg-green-800 hover:text-green-300 px-5 py-2`
                                        }
                                        >
                                        Projects
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                        `block duration-200 ${isActive ? "text-green-500" : "text-white"}  border-gray-100 rounded-full text-xl hover:bg-green-800 hover:text-green-300 px-5 py-2`
                                }
                                >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                        `block duration-200 ${isActive ? "text-green-500" : "text-white"}  border-gray-100 rounded-full text-xl hover:bg-green-800 hover:text-green-300 px-5 py-2`
                                        }
                                        >
                                        Contact
                                    </NavLink>
                                </li>             
                    </ul>
                </div>
                ):(<div /> )}
                
            </div>
        </header>
    );
}