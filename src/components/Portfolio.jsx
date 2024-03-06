import React from 'react'
import laravel from '../assets/laravel.jpg'
import tobuylist from '../assets/tobuylist.png'
import login from '../assets/login.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1, 
            src: laravel,
        }, 
        {
            id: 2, 
            src: laravel,
        }, 
        {
            id: 3, 
            src: tobuylist,
        }, 
        {
            id: 4, 
            src: login,
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-fuchsia-300 to-fuchsia-100
                                        w-full'>
        <div className='max-w-screen-lg
                        py-44
                        px-4
                        mx-auto
                        flex flex-col justify-center
                        w-full h-full'>
                            
            <div className='pb-8'>
                <p className='text-4xl 
                            font-bold
                            inline
                            border-b-4
                            border-fuchsia-950
                        text-gray-900'>Portfolio</p>
                <p className='py-6 
                            text-gray-900
                            text-xl'>Check out my project</p>
            </div>

            {/* CARD VIEW */}
            <div className='grid 
                            sm:grid-cols-2 md:grid-cols-3 
                            gap-8
                            px-12
                            sm:px-0'>

                {portfolios.map(({id, src}) => (
                
                        <div key={id} className='shadow-md shadow-gray-600 
                                rounded-lg
                                hover:scale-110 duration-300'>
                            <div> 
                                <img src={src} alt='projectImage' className='rounded-md
                                                                                h-48
                                                                                w-full
                                                                                object-fit'/>
                            </div>

                            <div className='flex justify-center items-center'>
                                <button className='w-1/2 
                                        px-6 py-3
                                        m-4 
                                        hover:scale-110 duration-300
                                        text-gray-900
                                        font-semibold'>Demo
                                </button>
                                <button className='w-1/2 
                                        px-6 py-3
                                        m-4
                                        hover:scale-110 duration-300
                                        text-gray-900
                                        font-semibold'>Code
                                </button>
                            </div>
                        </div>
                    
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio