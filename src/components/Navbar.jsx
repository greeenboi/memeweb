import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <nav className=' hidden md:flex md:flex-row gap-2 font-mono w-full h-full  justify-evenly items-center pt-2 mb-1 '> 
     
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

      
        <button  ref={btnRef} onClick={onOpen} className="border border-purple-700 rounded-md p-2 hover:bg-yellow-300 hover:bg-opacity-40 transition-all">
          Create Meme
        </button>
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </button>
            <button colorScheme='blue'>Save</button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
      
      <button onClick={toggleColorMode} className='border border-purple-700 rounded-md p-4 hover:bg-yellow-300    hover:bg-opacity-40 transition-all'>
        {colorMode === "light" ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}
      </button>
    
    </nav>

  )
}

export default Navbar