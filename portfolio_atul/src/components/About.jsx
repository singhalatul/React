import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import './About.css';

const About = () => {
    const [activeSection, setActiveSection] = useState('education');
    const sections = {
        education: (
            <div className="education">
                <div className='space-y-3 tracking-tight'>
                    <h2 className="text-2xl font-semibold font-mono ">My education</h2>
                    <div className="md:w-72 w-56">
                        <p className="text-xs">Describing my education details and training took in journey of my Btech.</p>
                    </div>
                </div>
                {/*cards */}
                <div className="md:grid md:grid-cols-1 md:mt-7 overflow-y-scroll hover:overflow-scroll scrollbar h-80 md:w-full  mt-5 space-y-2">
                        {/*card-1*/}
                        <div className='bg-gray-800 shadow-lg rounded-md mr-2  w-full h-32 md:mt-0'>
                            <div className="flex flex-col justify-center items-center h-full w-full">
                                <h1>Btech</h1>
                                <p className="text-center font-serif text-sm">JECRC College, Jaipur(2024)</p>
                                <h2 className="text-center font-serif text-sm">Electronics & Communication</h2>
                                <h3 className="text-center font-serif text-sm">cgpa:8.9/10</h3>
                            </div>
                        </div>
                        {/*card-2*/}
                        <div className='bg-gray-800  shadow-lg rounded-md  w-full h-32 md:mt-0 mt-3'>
                            <div className="flex flex-col justify-center items-center h-full w-full">
                            <h1>12th</h1>
                            <p className="text-center font-serif text-sm">Disha senior sec. School(2019)</p>
                            <h2 className="text-center">Maths</h2>
                            <h3 className="text-center font-serif text-sm">per:75.20%</h3>
                            </div>
                        </div>
                        {/*card-3*/}
                        <div className='bg-gray-800 shadow-lg rounded-md mr-2 mt-3 w-full h-32 '>
                            <div className="flex flex-col justify-center items-center h-full w-full">
                            <h1>10th</h1>
                            <p className="text-center font-serif text-sm">St.xavier`s sec school(2017)</p>
                                {/* <h2 className="text-center">schooling</h2> */}
                                <h3 className="text-center font-serif text-sm">Per:84.50%</h3>
                            </div>
                        </div>
                </div>
            </div>
        ),
        training: (
            <div className="education">
                <div className='space-y-3 tracking-tight'>
                    <h2 className="text-2xl font-semibold font-mono ">My education</h2>
                    <div className="md:w-72 w-56">
                        <p className="text-xs">Describing my education details and training took in journey of my Btech.</p>
                    </div>
                </div>
                {/*cards */}
                <div className="md:grid md:grid-cols-1 md:mt-7 overflow-y-scroll hover:overflow-scroll scrollbar h-80 md:w-full  mt-5">
                        {/*card-4*/}
                        <div className='bg-gray-800  shadow-lg rounded-md w-full h-32'>
                            <div className="flex flex-col justify-center items-center h-full w-full">
                            <h1>Training</h1>
                            <p className="text-center font-serif text-sm">ServiceNow(sep 2023)</p>
                                {/* <h2 className="text-center">schooling</h2> */}
                                <h3 className="text-center font-serif text-sm">Cert: CSA,CAD</h3>
                            </div>
                        </div>
                        {/*card-5*/}
                        <div className='bg-gray-800 shadow-lg rounded-md mr-2 mt-3 w-full h-32'>
                            <div className="flex flex-col justify-center items-center h-full w-full">
                            <h1>Training</h1>
                            <p className="text-center font-serif text-sm">Regex Software(2022)</p>
                                {/* <h2 className="text-center">schooling</h2> */}
                                <h3 className="text-center font-serif text-sm">Cert: MERN stack</h3>
                            </div>
                        </div>
                        {/*card-6*/}
                        <div className='bg-gray-800  shadow-lg rounded-md mt-3 w-full h-32'>
                            <div className="flex flex-col justify-center items-center h-full w-full">
                            <h1>Training</h1>
                            <p className="text-center font-serif text-sm">Matrix(2021)</p>
                                {/* <h2 className="text-center">schooling</h2> */}
                                <h3 className="text-center font-serif text-sm">Cert: C,C++,DSA</h3>
                            </div>
                        </div>
                </div>
            </div>
        ),
        skills: (
            <div className="skills">
                <div className="tracking-tighter space-y-3">
                    <h2 className='text-2xl font-semibold font-mono'>My Skills</h2>
                    <div className="md:w-72 w-56">
                            <p className="text-xs tracking-wider">
Frontend Development: Crafting responsive and user-friendly interfaces using React, HTML, CSS, and Tailwind.<br></br>
Backend Development: Building robust server-side applications with Node.js and managing databases with MongoDB.<br></br>
Programming Languages: Proficient in C++, leveraging its power for performance-critical applications.</p>
                    </div>
                </div>
            
                {/*cards */}
                <div className='mt-7'>
                    <div className="space-y-2">
                        <div className="grid grid-cols-4 ">
                            <div className="lg:w-24 lg:h-24 md:h-24 md:w-20 md:mr-2 shadow-xl bg-gray-800 grid place-items-center rounded-xl "><FaHtml5 className='myHtml' size={28}  onMouseOver={({target})=>target.style.color="#22c55e"} onMouseOut={({target})=>target.style.color="white"}/>
                            <div className='hide top-72 font-bold tracking-widest'>HTML</div>
                            </div>
                            <div className="lg:w-24 lg:h-24 md:h-24 md:w-20 shadow-xl bg-gray-800 grid place-items-center rounded-xl"><FaCss3 className='myCss ' size={28} onMouseOver={({target})=>target.style.color="#22c55e"} onMouseOut={({target})=>target.style.color="white"}/>
                            <div className='hide top-72 font-bold tracking-widest'>CSS</div></div>
                            <div className="lg:w-24 lg:h-24 md:h-24 md:w-20 shadow-xl bg-gray-800 grid place-items-center rounded-xl "><RiJavascriptFill className='myJava' size={28} onMouseOver={({target})=>target.style.color="#22c55e"} onMouseOut={({target})=>target.style.color="white"}/>
                            <div className='hide top-72 font-bold tracking-widest'>Javascript</div></div>
                            <div className="lg:w-24 lg:h-24 md:h-24 md:w-20 shadow-xl bg-gray-800 grid place-items-center rounded-xl"><FaReact className="myReact" size={28} onMouseOver={({target})=>target.style.color="#22c55e"} onMouseOut={({target})=>target.style.color="white"}/>
                            <div className='hide top-72 font-bold tracking-widest'>React.js</div></div>
                        </div>
                        <div className="grid grid-cols-4">
                            <div className="lg:w-24 lg:h-24 md:h-24 md:w-20 shadow-xl bg-gray-800 grid place-items-center rounded-xl "><FaNode className='myNode' size={32} onMouseOver={({target})=>target.style.color="#22c55e"} onMouseOut={({target})=>target.style.color="white"}/>
                            <div className='hide md:top-96 font-bold tracking-widest'>Node.js</div></div>
                            <div className="lg:w-24 lg:h-24 md:h-24 md:w-20 shadow-xl bg-gray-800 grid place-items-center rounded-xl "><RiTailwindCssFill className='myTail' size={28} onMouseOver={({target})=>target.style.color="#22c55e"} onMouseOut={({target})=>target.style.color="white"}/>
                            <div className='hide md:top-96 font-bold tracking-widest'>Tailwind</div></div>
                            <div className="lg:w-24 lg:h-24 md:h-24 md:w-20 shadow-xl bg-gray-800 grid place-items-center rounded-xl myMongo"><SiMongodb className='myMongo' size={28} onMouseOver={({target})=>target.style.color="#22c55e"} onMouseOut={({target})=>target.style.color="white"}/>
                            <div className='hide md:top-96 font-bold tracking-widest'>MongoDB</div></div>
                            <div className="lg:w-24 lg:h-24 md:h-24 md:w-20 shadow-xl bg-gray-800 grid place-items-center rounded-xl "><SiCplusplus className='myC' size={28} onMouseOver={({target})=>target.style.color="#22c55e"} onMouseOut={({target})=>target.style.color="white"}/>
                            <div className='hide md:top-96 font-bold tracking-widest'>C++</div></div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        about: (
            <>
            <div className="experience">
                <div className="tracking-tighter space-y-3 ml-10 md:mt-0 mt-5 md:ml-0">
                    <h2 className='text-2xl font-semibold font-mono '>About Me</h2>
                    <div className="md:w-72 w-56">
                        <p className="text-xs"></p>
                    </div>
                </div>
                {/*bio */}
                <div className="md:grid md:grid-rows-5 mt-8 pr-2 md:space-y-2 ml-10md:ml-0 ">
                    <div className='md:grid md:grid-cols-2 border-white'>
                        <div className="space-x-3">
                            <span className="text-sm text-slate-500 font-bold">Name</span> 
                            <span className='font-mono tracking-tighter'>Atul Singhal</span>
                        </div>
                        <div className="space-x-3">
                            <span className="text-sm text-slate-500 font-bold">Phone</span>
                            <span className='font-mono tracking-tighter'>(+91)&nbsp;7737141008</span>
                        </div>
                    </div>
                    <div className='md:grid md:grid-cols-2 border-white'>
                        <div className="space-x-3">
                            <span className="text-sm text-slate-500 font-bold">Experience</span> 
                            <span className='font-mono tracking-tighter'>1 Year</span>
                        </div>
                        <div className="space-x-3">
                            <span className="text-sm text-slate-500 font-bold">linked In</span>
                            <span className='font-mono tracking-tighter'>/atul-singhal-32a665119/</span>
                        </div>
                    </div>
                    <div className='md:grid md:grid-cols-2 border-white'>
                        <div className="space-x-3">
                            <span className="text-sm text-slate-500 font-bold">Nationality</span> 
                            <span className='font-mono tracking-tighter'>Indian</span>
                        </div>
                        <div className="space-x-3">
                            <span className="text-sm text-slate-500 font-bold">Email</span>
                            <span className='font-mono tracking-tighter'>atul.aggarwal2852@gmail.com</span>
                        </div>
                    </div>
                    <div className='md:grid md:grid-cols-2 border-white '>
                        <div className="space-x-3">
                            <span className="text-sm text-slate-500 font-bold">FreeLance</span> 
                            <span className='font-mono tracking-tighter'>Available</span>
                        </div>
                        <div className="space-x-3">
                            <span className="text-sm text-slate-500 font-bold">Languages</span>
                            <span className='font-mono tracking-tighter'>English,&nbsp;Hindi</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            </>
        ),
    };
    const handleButtonClick = (section) => {
        setActiveSection(section);
    };
    
    return (
        <div className='relative w-full h-full overflow-y-scroll md:overflow-hidden scrollbar'>
            <div className="md:max-w-screen-lg max-w-screen-sm mx-auto md:mt-20 mt-8 ">
                <div className='text-white px-5 md:grid md:grid-cols-2 grid grid-cols-1'>
                    {/* left-side*/}
                    <div className="md:w-11/12 w-full grid md:grid md:place-items-start place-items-center ">
                        <div className="space-y-4" >
                            <h1 className='text-white md:text-4xl text-2xl font-semibold font-serif tracking-widest'>Why&nbsp;&nbsp;Hire&nbsp;&nbsp;me?</h1>
                            {/*paragraph*/}
                            <div className="md:w-72 w-52">
                                <p className='md:text-sm text-xs w-full pr-2 text-wrap text-gray-300'>Choosing the right developer is crucial for the success of your project. Here’s why I believe I would be a great fit for your team </p>
                            </div>
                            {/*button  */}
                            <div className='md:w-80 pt-4 w-56 space-y-4'>
                                <button 
                                onClick={()=>handleButtonClick('education')}
                                className="text-white bg-gray-900 hover:bg-green-500 ring-2 ring-green-300 ring-inset ring-opacity-25 rounded-lg hover:ring-green-500 hover:text-black font-semibold w-full items-center py-1">EDUCATION</button>
                                <button 
                                onClick={()=>handleButtonClick('training')}
                                className="text-white bg-gray-900 hover:bg-green-500 ring-2 ring-green-300 ring-inset ring-opacity-25 rounded-lg hover:ring-green-500 hover:text-black font-semibold w-full items-center py-1">TRAINING & CERTIFICATES</button>
                                <button 
                                onClick={()=>handleButtonClick('skills')}
                                className="text-white bg-gray-900 hover:bg-green-500 ring-2 ring-green-300 ring-inset ring-opacity-25 rounded-lg hover:ring-green-500 w-full items-center py-1 font-semibold hover:text-black">SKILLS</button>
                                <button
                                onClick={()=>handleButtonClick('about')} 
                                className={`text-white bg-gray-900  hover:bg-green-500 ring-2 ring-green-300 ring-inset ring-opacity-25 rounded-lg hover:ring-green-500 w-full items-center py-1 font-semibold hover:text-black`}>ABOUT ME</button>
                            </div>
                        </div>
                    </div>
                    {/*right-side*/}
                    <div className="lg:w-full md:w-full  w-full md:place-items-start md:grid place-items-center grid md:mt-0 mt-5 mb-16  md:mb-0">
                        <div className="space-x-4">
                            {sections[activeSection]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
