import React from 'react'
import php from '../assets/php-logo.png'
import html from '../assets/html-logo.png'
import css from '../assets/css-logo.png'
import javascript from '../assets/js-logo.png'
import mysql from '../assets/mysql-logo.png'
import laravel from '../assets/laravel-logo.png'
import bootstrap from '../assets/bootstrap-logo.png'
import react from '../assets/react-logo.png'
import tailwind from '../assets/tailwind-logo.png'
import github from '../assets/github-logo.png'

const Experience = () => {

  const skills = [
    {
      id: 1,
      src: php,
      title: 'PHP'
    },
    {
      id: 2,
      src: html,
      title: 'HTML'
    },
    {
      id: 3,
      src: css,
      title: 'CSS'
    },
    {
      id: 4,
      src: javascript,
      title: 'JavaScript'
    },
    {
      id: 5,
      src: mysql,
      title: 'MySQL'
    },    
    {
      id: 6,
      src: laravel,
      title: 'Laravel'
    },
    {
      id: 7,
      src: bootstrap,
      title: 'Bootstrap'
    },
    {
      id: 8,
      src: react,
      title: 'React'
    },
    {
      id: 9,
      src: tailwind,
      title: 'Tailwind'
    },
    {
      id: 10,
      src: github,
      title: 'GitHub'
    },
  ]

  return (
    <div name="experience" className='bg-gradient-to-b from-fuchsia-100 to-fuchsia-300
                                      w-full'>
      <div className='max-w-screen-lg 
                      mx-auto
                      py-44
                      px-4
                      flex flex-col justify-center
                      w-full h-full
                      text-gray-900'>

        <div className='pb-8'>
          <p className='text-4xl 
                        font-bold 
                        inline 
                        border-b-4
                        border-fuchsia-950
                        text-gray-900'>
              Experience</p>
          <p className='py-6 text-xl text-gray-900'>
            Here are the technologies that have been used: </p>
        </div>

        {/* CARD VIEW */}
        <div className='grid 
                        sm:grid-cols-2 md:grid-cols-3 
                        gap-8 
                        px-12
                        sm:px-0'>
            {
              skills.map(({id, src, title, style}) => (
                <div key={id} className={"rounded-lg opacity-0"+style}>
                  <img src={src} alt='programming-logo' className='h-48 w-full 
                                                                    object-contain' />
                  <p className='mt-4 
                                text-xl 
                                font-semibold
                                text-center'>{title}</p>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Experience