import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub,  faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FontAwesomeIcon icon={faLinkedinIn} fontSize={25}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/nadzirah-abd-rahman/', 
      style: ' rounded-tr-lg',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FontAwesomeIcon icon={faGithub} fontSize={25}/>
        </>
      ),
      href: 'https://github.com/nadzirahabdrahman', 
    },
    {
      id: 3,
      child: (
        <>
          WhatsApp <FontAwesomeIcon icon={faWhatsapp} fontSize={25}/>
        </>
      ),
      href: 'https://wa.link/8pfhve', 
    },
    {
      id: 4,
      child: (
        <>
          Email <FontAwesomeIcon icon={faEnvelope} fontSize={25}/>
        </>
      ),
      href: 'mailto:nadzirahabdrahman@hotmail.com', 
    },
    {
      id: 5,
      child: (
        <>
          Resume <FontAwesomeIcon icon={faFile} fontSize={25}/>
        </>
      ),
      href: '/resume.pdf', 
      style: ' rounded-br-lg',
      download: true,
    },
  ];


  return (
    <div className='flex flex-col 
                    top-[35%] 
                    left-0 
                    fixed
                    hidden
                    lg:flex'>
        <ul>

          {links.map(({id, child, href, style, download}) => (
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-fuchsia-950 ml-[-100px] hover:rounded-r-full duration-300 hover:ml-[-10px] "+style}>
                <a href={href} className='flex justify-between items-center
                              w-full
                              text-white' download={download} target='_blank' rel='noreferrer'>
                  <>
                    {child}
                  </>
                </a>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default SocialLinks