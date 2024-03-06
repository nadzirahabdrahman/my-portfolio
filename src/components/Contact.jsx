import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full
    bg-gradient-to-b from-fuchsia-300 to-fuchsia-100'>
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
                        text-gray-900'>Contact</p>
                <p className='py-6 
                            text-gray-900
                            text-xl'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/wbrdvqlb' method='POST' className='flex flex-col 
                                                                                        w-full md:w-1/2'>
                    {/* Name */}
                    <input type='text' name='fullname' placeholder='Name' className='p-2
                                                                                    bg-transparent
                                                                                    border-2
                                                                                    border-gray-500
                                                                                    rounded-full
                                                                                    text-gray-900
                                                                                    focus:outline-none'/>

                    {/* Email */}
                    <input type='text' name='email' placeholder='Email' className='p-2
                                                                                    bg-transparent
                                                                                    border-2
                                                                                    border-gray-500
                                                                                    rounded-full
                                                                                    text-gray-900
                                                                                    focus:outline-none
                                                                                    my-4'/>
                    {/* Your message */}
                    <textarea name='message' rows='10' placeholder='Your message' className='p-2 
                                                                                            bg-transparent
                                                                                            border-2
                                                                                            border-gray-500
                                                                                            rounded-lg
                                                                                            text-gray-900
                                                                                            focus:outline-none'></textarea>

                    <button className='bg-sky-600
                                        text-white
                                        px-6 py-3
                                        my-8
                                        mx-auto
                                        flex items-center
                                        rounded-full
                                        hover:scale-105 duration-200'>Send</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact