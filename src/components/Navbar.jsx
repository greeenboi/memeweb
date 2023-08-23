import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <nav className=' hidden md:flex md:flex-row gap-2 font-mono w-full h-full justify-evenly items-center pt-2 mb-1 '> 
     
      <Image boxSize='80px' src="https://i.postimg.cc/CKPxLyT7/image.png" alt='Pepe Logo' />
      <div className='flex gap-12'>
        <Link to="/" className='hover:border-b-2 hover:border-fuchsia-500 transition-all mb-2 relative pr-2 pl-2 '>
          Home
        </Link>
        <Link to="memes" className='hover:border-b-2 hover:border-fuchsia-500 transition-all mb-2 relative pr-2 pl-2'>
          Memes
        </Link>
        <Link to="about" className='hover:border-b-2 hover:border-fuchsia-500 transition-all mb-2 relative pr-2 pl-2'>
          About Us
        </Link>
      </div>

      <button className="border border-purple-700 rounded-md p-2 hover:bg-purple-600 hover:bg-opacity-40 transition-all">
        Create Meme
      </button>
    </nav>

  )
}

export default Navbar