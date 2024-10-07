import React, { useState } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Project = () => {
    const [activePage, setActivePage] = useState(1);
    const sections = [
        {
            id: 1,
            title: "Frontend Project",
            description: "Basic react  project currency Converter by using react state management hooks",
            tech: "HTML, CSS, React, Tailwind",
            image: "./Screenshot 2024-10-06 115733.png",
            href:"http://www.github.com/singhalatul/react"
        },
        {
            id: 2,
            title: "Frontend Project",
            description: "Todo project in which user can perform all CRUD operations",
            tech: "HTML, CSS, React, Tailwind",
            image: "./Screenshot 2024-10-06 120142.png",
            href:"http://www.github.com/singhalatul/react"

            
        },
        {
            id: 3,
            title: "Frontend Project",
            description: "ThemeSwitcher basic Project in which user can switch dark and light mode by toggle only button we can change theme only by changing our className",
            tech: "HTML, CSS, React, Tailwind",
            image: "./Screenshot 2024-10-06 120449.png",
            href:"http://www.github.com/singhalatul/react"

        },
        {
            id: 4,
            title: "Frontend Project",
            comming:"comming soon...",
            description:`MegaBlog Project in which user can create,update and share our thoughts like twitter`,
            tech: "HTML, CSS, React, Tailwind, Appwrite ",
            image: "working on this",
            href:"http://www.github.com/singhalatul/react"
        },
        {
            id: 5,
            title: "Backend Project",
            description: "This project is based on concept of Youtube with userChannel and all other functionality like youtube. ",
            tech: "Node.js, Express.js, postman, mongoDB, Aggregation Pipeline",
            image: "./Screenshot 2024-10-06 120142.png",
            href:"http://www.github.com/singhalatul/Youtube-backend"
        },
        {
            id: 6,
            title: "Backend Project",
            description: "E-commerce website like project with userAuth, genearting reset emails, shopping cart experience etc.",
            tech: "Node.js, Express.js, postman, mongoDB, Aggregation Pipeline",
            image: "./Screenshot 2024-10-06 120142.png",
            href:"http://www.github.com/singhalatul/e-commerce-backend"
        }
    ];
    const totalPages = sections.length

    const handleNext = () => {
        if (activePage < totalPages) {
            setActivePage(prev => prev + 1);
        }
    }

    const handlePrev = () => {
        if (activePage > 1) {
            setActivePage(prev => prev - 1);
        }
    }

    const { title, description, tech, image,href,comming} = sections[activePage - 1];

    return (
        <div className='relative lg:max-w-screen-lg lg:mx-auto md:top-28 md:max-w-screen-md md:mx-auto mt-8'>
            <div className='md:flex md:flex-row ml-5 space-y-6'>
                <div className='space-y-3 mr-7 md:flex-initial md:w-5/12'>
                    <h1 className='text-7xl text-white font-mono'>{String(activePage).padStart(2, '0')}<span className="text-sm text-slate-500 md:pl-5 pl-1">{comming}</span></h1>
                    <h2 className="text-3xl text-white tracking-widest font-semibold">{title}</h2>
                    <p className="text-xsm text-white lg:w-96 md:80 font-serif tracking-widest">{description}</p>
                    <p className="text-lg text-green-500 font-semibold font-mono tracking-widest">{tech}</p>
                    <div className='w-full h-[0.5px] bg-gray-500'></div>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white relative top-3">
                        <FaGithub size={28} />
                    </a>
                </div>
                <div className="border border-white md:w-7/12 mr-5 mt-6 md:mt-0">
                    <img src={image} alt={`Project ${activePage}`} />
                </div>
            </div>
            <div className='text-black flex justify-end space-x-2 mt-2 text-md font-mono mr-5'>
                <button onClick={handlePrev} disabled={activePage === 1} className={`bg-green-500 w-8 h-8 flex items-center justify-center ${activePage === 1 ? 'bg-gray-800 cursor-not-allowed' : ''}`}>
                    <FaChevronLeft />
                </button>
                <button onClick={handleNext} disabled={activePage === totalPages} className={`bg-green-500 w-8 h-8 flex items-center justify-center ${activePage === totalPages ? 'bg-gray-800 cursor-not-allowed' : ''}`}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}

export default Project;
