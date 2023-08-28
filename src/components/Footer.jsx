import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineLink } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex flex-row min-h-12 justify-center items-center mb-2 pb-2 md:gap-12 gap-6'>
     <a href="https://github.com/greeenboi"><AiOutlineGithub/></a>
     <a href="https://www.linkedin.com/in/suvan-gowri-shanker-596943261/"><AiOutlineLinkedin/></a>
     <a href="https://heylink.me/green47/"><AiOutlineLink/></a>
    </div>
  )
}

export default Footer