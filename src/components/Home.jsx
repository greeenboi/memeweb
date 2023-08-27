import React from 'react'
import '../global.css'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'


import { PiNumberOneBold, PiNumberTwoBold, PiNumberThreeBold } from 'react-icons/pi'

const Home = () => {
  return (
   <>
    <main className="homebanner">
      <section className='flex flex-row gap-4 mt-2 mb-2'>
        <Box  className='border p-24 rounded-3xl border-emerald-400 glass'>
          <h1 className="text-8xl font-prism font-medium text-teal-200  ">
            <p  className="upgrade">
              Radical
            </p> Meme Gallery
          </h1>
        </Box>
        
      </section>
      
    </main>
    <main className='flex flex-col justify-center items-center mt-12'>
    <Box className='p-12 w-1/2 h-auto font-inter rounded-md flex items-center justify-center border border-emerald-400  '>
    Radical Meme Gallery - your ultimate destination for laughter and creativity! 
    </Box>
    <Box  className='p-12 mr-2 ml-2 mt-12 h-auto font-inter rounded-md flex flex-row items-center justify-between '>
      <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} className='flex flex-col justify-center font-montserrat font-normal text-2xl text-center  '>How to make your own meme</GridItem>
        <GridItem colSpan={2} color='brand.text' className='flex flex-wrap flex-row justify-center items-center text-2xl gap-6 font-poppins hover:text-4xl transition-all border border-emerald-400 '><PiNumberOneBold /><Text >Create an Account</Text></GridItem>
        <GridItem colSpan={2} color='brand.text' className='flex flex-wrap flex-row justify-center items-center text-2xl gap-6 font-poppins hover:text-5xl transition-all border border-emerald-400 '><PiNumberTwoBold /> <Text>Create Meme</Text></GridItem>
        <GridItem colSpan={4} color='brand.text' className='flex flex-wrap flex-row justify-center items-center text-2xl gap-6 font-poppins hover:text-6xl transition-all border border-emerald-400 '><PiNumberThreeBold /><Text>Post</Text></GridItem>
      </Grid>
    </Box>
    </main>
   </>
  )
}

export default Home