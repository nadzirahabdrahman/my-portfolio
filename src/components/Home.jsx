import React from 'react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pfp from '../assets/pfp2.png'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full 
                                bg-gradient-to-b from-fuchsia-300 to-fuchsia-100
                            '>
        
        <div className='max-w-screen-lg 
        mx-auto
        flex flex-col items-center justify-center
        h-full
        px-4
        md:flex-row'>
            <div className='flex flex-col justify-center 
                            h-full'>
                <h2 className='text-4xl 
                                sm:text-7xl
                                font-bold
                                text-gray-900'>I'm Nadzirah</h2>

                <p className='text-gray-900
                                py-4
                                max-w-md
                                text-xl'>Graduated from Bachelor Degree of Computer Science and
                currently I'm expressing my interest in front-end development using frameworks or CMS to enhance individual skill set in front-end development. 
                </p>

                <div>
                    <Link to="portfolio" smooth={true} duration={500} className='text-white 
                                                                                bg-gray-900
                                                                                w-fit
                                                                                px-6
                                                                                py-3
                                                                                my-2
                                                                                flex items-center
                                                                                rounded-full
                                                                                hover:scale-105 duration-200
                                                                                cursor-pointer'>
                        Portfolio
                        <span>
                            <FontAwesomeIcon icon={faChevronRight} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={pfp} alt='pfp' className='rounded-full
                                                    mx-auto 
                                                    w-2/3
                                                    md:w-full'/>
            </div>
        </div>
    </div>
  );
}

export default Home