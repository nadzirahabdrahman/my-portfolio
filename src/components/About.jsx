import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full 
    bg-gradient-to-b from-fuchsia-100 to-fuchsia-300'>
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
                        text-gray-900'>
              About
          </p>
        </div>

        <p className='text-xl mt-20 text-gray-900'>
        Hello, I'm Nadzirah binti Abd Rahman, a 26-year-old, Bachelor Degree of Computer Science graduated from Universiti Malaysia Pahang. I have one year of experience as a Software Programmer specializing in Point-Of-Sales (POS) systems. My expertise from my previous role lies in PHP, HTML, CSS, JavaScript, and MySQL, where I've worked without any framework.</p>

        <br />

        <p className='text-xl text-gray-900'>
        Apart from that, I have been self-learning about front-end frameworks such as React which I have been practicing my technical skills using ReactJS to create simple project to get more understanding. I am eager to learn more about common frameworks as I am aware framework usage has been escalated rapidly in most company especially IT industry. I am looking for entry level job opportunity which I can deliver my abilities and explore more experience that can adapt with current technologies and frameworks to enhance my skills set in future in software industry. 
          </p>
      </div>
    </div>
  )
}

export default About