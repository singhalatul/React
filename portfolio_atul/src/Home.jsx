import React, { useEffect,useState } from 'react';
import './Home.css'
// import { AiOutlineArrowDown } from "react-icons/ai"
import { MdDownloading } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Photo from './components/Photo';

const Home = () => {
    const [project,setProject] = useState(0);
    const [technology,setTechnology] = useState(0);
    const [experience,setExperience] = useState(0);
    const [dsa,setDsa] = useState(0);

    const onButtonClick=()=>{
        const pdfURL = "Atul_document.pdf"
        const link=document.createElement('a')
        link.href=pdfURL;
        link.download = "Atul_document.pdf"
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link);
    }

    useEffect(()=>{
        setTimeout(()=>{
            let n=0,p=0;
            setExperience((n)=> n<1 ? n+=1 :n);
            setProject((n)=> n<9 ? n+=1 :n);
            setTechnology((p)=>p<8 ?p+=1:p)
            
        },200)
    },[technology,project])
    
    useEffect(()=>{
        setTimeout(()=>{
            let q=0;
            setDsa((q)=>q<300 ?q+1:q) 
        },3)
    },[dsa])

    return (
        <div className="w-full z-20 h-full overflow-y-scroll md:overflow-hidden scrollbar">
            <div className='flex md:flex-row md:flex-wrap md:max-w-screen-lg md:mx-auto md:mt-16 flex-col items-center mt-12'>       
                <div className='md:w-6/12 md:px-2 order-2 md:order-1 md:mt-0 mt-10 p-2'>
                    <p className="text-white font-semibold">Software developer</p>
                    <h1 className="text-white text-6xl font-semibold space-y-2 font-mono">Hello I`m<br />
                        <div className="text-green-400 tracking-tighter">Atul Singhal</div>
                    </h1>
                    <p className="text-white mt-3 w-80 px-22 pl-0 text-wrap">A passionate software developer with a knack for creating efficient and innovative solutions. With a solid foundation in various technologies, I bring ideas to life through code. </p>
                    <div className="flex mt-6 items-center space-x-5 ">
                        <button 
                        onClick={onButtonClick}
                        className="rounded-full text-green-400 border border-green-400 px-3  py-1 flex items-center justify-between"
                        >Download CV<span className='ml-2'><MdDownloading size={18} />
                        </span></button>
                        <div className="text-green-400">
                            <a href="http://github.com/singhalatul" target="_blank">
                                <FaGithub size={20}/>
                            </a>
                        </div> 
                        <div className="text-green-400">
                            <a href="http://www.linkedin.com/in/atul-singhal-32a665119" target="_blank">
                                <FaLinkedin  size={20}/>
                            </a>
                        </div> 
                    </div>

                </div>
                <div className="md:w-6/12 md:flex md:justify-center order-1 md:order-2 ">
                    <div className='flex items-center  md:h-96 md:w-96 rounded-full w-80 h-80 '><Photo /></div>
                </div>
            </div>
            <div className="md:max-w-screen-lg md:mx-auto  md:mt-10 lg:mt-12 md:w-full w-64 mx-auto">
                <div className='md:flex md:flex-row md:justify-evenly md:items-center md:px-0  md:space-y-0 space-y-8 md:mt-0 mt-7 mb-20 md:mb-0'>
                    <div className='text-white flex items-center space-x-2'>
                        <div className="text-white text-5xl ">0{experience}</div>
                        <div>Total&nbsp;<br></br>Experience</div>
                    </div>
                    <div className='text-white flex items-center space-x-2'>
                        <div className="text-5xl ">0{project}</div>
                        <div>Projects<br/>Completed</div>
                    </div>
                    <div className='text-white flex items-center space-x-2'>
                        <div className="text-5xl">0{technology}</div>
                        <div>Technology<br />Masters</div>
                    </div>
                    <div className='text-white flex items-center space-x-2'>
                        <div className='text-5xl'>{dsa}</div>
                        <div>DSA<br />Questions&nbsp;solved</div>
                    </div>

                </div>
            </div>
        
        </div>
    );
} 

export default Home;
