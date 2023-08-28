import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { useDisclosure } from '@chakra-ui/react'
import { storage } from '../utils/firebase'
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { useState } from 'react';
import { uploadBytesResumable } from 'firebase/storage';
import { AiOutlineUpload } from 'react-icons/ai';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { Menu,
        MenuButton,
        MenuList,
        MenuItem,
        IconButton,
        Portal,
        MenuItemOption,
        MenuGroup,
        MenuOptionGroup,
        MenuDivider,} from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [progressPercent, setProgressPercent] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
  
    if (!file) return null;
    const storageRef = ref(storage, `memes/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
  
    uploadTask.on("state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgressPercent(progress)
      },
      (error) => {
        alert(error)
      },
      () => {
        e.target[0].value = ''
        getDownloadURL(storageRef).then((downloadURL) => {
          console.log(downloadURL)
          window.location.reload(false);
        })
      }
    )
  } 

  

  return (
    <nav className='flex flex-row gap-2 font-mono w-full h-full  justify-evenly items-center pt-2 mb-1 '> 
     
      <Image boxSize='80px' src="https://i.postimg.cc/CKPxLyT7/image.png" alt='Pepe Logo' />
      
      <div className="flex flex-row items-center gap-12">
        <div className='md:hidden'>
          <Menu >
            <MenuButton 
              as={IconButton}
              aria-label='Options'
              icon={<RxHamburgerMenu />}
              variant='outline'
              
              />
              <Portal>
                <MenuList>
                  <MenuItem><Link to="/">Home</Link></MenuItem>
                  <MenuItem><Link to="/memes">Memes</Link></MenuItem>
                  <MenuItem><Link to="/about">About Us</Link></MenuItem>
                  
                </MenuList>
              </Portal>
          </Menu>
        </div>
        <div id="menu-links" className="hidden md:flex flex-row gap-4 font-inter">
          <Link to="/" className="hover:border-b-2 hover:border-fuchsia-500 transition-all mb-2 relative pr-2 pl-2">
            Home
          </Link>
          <Link to="/memes" className="hover:border-b-2 hover:border-fuchsia-500 transition-all mb-2 relative pr-2 pl-2">
            Memes
          </Link>
          <Link to="/about" className="hover:border-b-2 hover:border-fuchsia-500 transition-all mb-2 relative pr-2 pl-2">
            About Us
          </Link>
        </div>
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
        <DrawerContent className='noover'>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Upload Your Meme</DrawerHeader>
          <DrawerBody className='noover'>
          <form className='flex flex-col gap-12 ' name='upload_file' onSubmit={handleSubmit}>
            <label for="file-upload" class="cursor-pointer flex flex-row justify-center items-center gap-12 color text-gray-700 py-2 px-4 rounded-lg">
              Upload Meme <AiOutlineUpload />
            </label>
            <input id="file-upload" type="file" class="hidden" />
            
            {!progressPercent > 0  ? (
                <progress value={progressPercent} max="100" class="w-full"/>
              ) : null}

            <DrawerFooter className='noover'>
              
              <button colorScheme='yellow' className='rounded-md color'>Upload</button>
            </DrawerFooter>
          </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      
      
      <button onClick={toggleColorMode} className='border border-purple-700 rounded-md p-4 hover:bg-yellow-300    hover:bg-opacity-40 transition-all'>
        {colorMode === "light" ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}
      </button>
    
    </nav>

  )
}

export default Navbar