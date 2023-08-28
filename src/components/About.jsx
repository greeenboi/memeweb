import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const About = () => {
  return (
    <>
      <main className='hidden md:block aboutbanner'>
        <section>
          <Box  className='hidden md:block border p-12 rounded-3xl border-emerald-400 w-fit ml-0 mr-0'>
            <h1 className="text-8xl font-prism font-medium text-teal-200 ">
              <p  className="upgrade">
                About us
              </p> 
            </h1>
          </Box>  
          <h1 className="md:hidden text-6xl font-prism font-medium text-teal-200  ">
            <p  className="upgrade">
              About Us
            </p> 
          </h1>
        </section>
      </main>
      <main>
        <Box className='flex flex-row p-2 md:p-6 mt-12 mb-12 mr-4 ml-4 md:mr-8 md:ml-8 border border-teal-400 rounded-md font-montserrat'>
          <Text lineHeight={10}>
          Introducing Radical - your ultimate destination for laughter and creativity! 🎉 With a carefully curated collection of the funniest and most relatable memes, our gallery is a treasure trove of amusement that will surely brighten up your day. Whether you're in need of a quick pick-me-up or want to share a hilarious moment with friends, our diverse range of memes has something for everyone. From clever pop culture references to timeless classics, our gallery is a hub of humor that's bound to spark joy. So, why wait? Dive into the world of RAD and join the laughter revolution today! 🤣📸
          </Text>
        </Box>
      </main>
    </>
  )
}

export default About