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
        <DrawerContent className='noover'>
          <DrawerCloseButton />
          <DrawerHeader>Upload Your Meme</DrawerHeader>
          <form className='noover' name='upload_file' onSubmit={handleSubmit}>

          <DrawerBody className='noover'>
            <input type='file' />
            <progress value={progressPercent} max="100"/>
          </DrawerBody>

          <DrawerFooter className='noover'>
            
            <button colorScheme='blue'>Upload</button>
          </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
      
      
      <button onClick={toggleColorMode} className='border border-purple-700 rounded-md p-4 hover:bg-yellow-300    hover:bg-opacity-40 transition-all'>
        {colorMode === "light" ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}
      </button>
    
    </nav>

  )
}

export default Navbar