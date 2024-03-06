import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/nado-logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1, 
            link: 'home',
        },
        {
            id: 2, 
            link: 'about',
        },
        {
            id: 3, 
            link: 'portfolio',
        },
        {
            id: 4, 
            link: 'experience',
        },
        {
            id: 5, 
            link: 'contact',
        },
    ];

    return (
        <div className="flex justify-between items-center 
        w-full h-20 
        px-4 
        fixed 
        text-gray-900
        bg-fuchsia-300">
            <div name="home">
                <Link to="home" smooth={true} duration={500}>
                    <img src={Logo} alt='logo' className='w-28
                                                            cursor-pointer'/>
                </Link>
            </div>

            {/* RESPONSIVE DESIGN */}
            <ul className='hidden md:flex'>
                {links.map(({id, link}) => (
                    <li key={id} className='px-4 
                    cursor-pointer 
                    font-semibold 
                    hover:scale-110 duration-300
                    capitalize'>
                        {/* {link} */}
                        <Link to={link} smooth={true} duration={500} >{link}</Link>
                    </li>
                ))}
            </ul>

            {/* MOBILE DESIGN */}
            {/* MENUS BAR & CLOSE BAR */}
            <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
                {nav ? <FontAwesomeIcon icon={faXmark} fontSize={30}/> : <FontAwesomeIcon icon={faBars} fontSize={30}/>}
            </div>


            {nav && (
                <ul className="flex flex-col justify-center items-center 
                absolute 
                top-0 left-0 
                w-full h-screen 
                bg-gradient-to-b from-fuchsia-300 to-fuchsia-100">
                    {links.map(({id, link}) => (
                        <li key={id} className='px-4 
                        cursor-pointer 
                        py-6 
                        text-4xl 
                        hover:scale-110 duration-300
                        capitalize'>
                            {/* {link} */}
                            <Link onClick={() => setNav(!nav)} to={link} smooth={true} duration={500} >{link}</Link>
                        </li>
                    ))}
                </ul>
            )}


        </div>
  )
}

export default Navbar