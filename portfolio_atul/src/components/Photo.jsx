import React from 'react';
import {motion} from 'framer-motion'

const Photo = () => {
    return (
        <div className='w-full h-full relative '>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1,transition:{delay:0.50,duration:0.01,ease:"easeIn"}}}>
               {/*image*/}
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1,transition:{delay:0.4,duration:2,ease:"easeInOut"
                    }}}
                        className="w-80 h-80 md:w-[365px] md:h-[365px] rounded-full absolute md:top-2 md:right-2 top-2 left-3"
                    >
                    {/*<img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727049600&semt=ais_hybrid"*/} 
                    <img src="./atul_final.jpg"
                    priority="true" 
                    quality={100} 
                    fill="true"
                    alt="hero-image" 
                    className="object-contain rounded-full md:h-[365px] md:w-[365px] h-[300px] w-[300px"/>
                </motion.div>
                {/*circle */}
                 <motion.svg className="w-80 h-80 md:w-96 md:h-96 "
                 fill="transparent"
                 viewBox="0 0 506 506"
                 xmlns="http://www.w3.org/2000/svg"
                 >
                    <motion.circle cx="253" cy="253" r="250" stroke="#00ff99" strokeWidth="4"
                    strokeLinecap="round" strokeLinejoin="round"
                    initial={{strokeDasharray:"24 10 0 0"}}
                    animate={{strokeDasharray:["15 120 25 25", "16 25 92 72","4 250 22 22" ],
                        rotate:[120,360]
                    }}
                    transition={{duration:20,repeat:Infinity,repeatType:"reverse"}}
                    />
                </motion.svg>   
            </motion.div>
        </div>
    );
}

export default Photo;
