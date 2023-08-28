import { React, useState, useEffect } from 'react';
import { storage } from '../utils/firebase'
import { app } from '../utils/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { Grid, GridItem, Box } from "@chakra-ui/react"

const Content = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesRef = ref(storage, `memes/`)
        const imageList = await listAll(imagesRef);

        const urls = await Promise.all(
          imageList.items.map(async (itemRef) => {
            return getDownloadURL(itemRef);
          })
        );

        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <section className='sm:hidden md:block memebanner'>
          <Box  className='hidden md:flex border p-12 rounded-3xl border-emerald-400 w-fit ml-0 mr-0'>
            <h1 className="text-8xl font-prism font-medium text-teal-200 ">
              <p  className="upgrade">
                Explore
              </p> 
            </h1>
          </Box>
          <h1 className="md:hidden text-6xl font-prism font-medium text-teal-200  ">
            <p  className="upgrade">
              Explore
            </p> 
          </h1>
      </section>
      <main className='min-h-screen'>
        <div className='mt-12 mb-12 mr-2 ml-2 md:mr-24 md:ml-24 gap-4 lg:gap-12 grid grid-cols-1 md:grid-cols-5 '>
        {imageUrls.map((url, index) => (
          <GridItem className='md:max-h-64 gap-4 lg:gap-12 p-2 border border-emerald-600 rounded-md flex flex-row justify-center items-center ' >
            <p className='hidden md:block absolute font-inter text-lg w-max h-max opacity-0 hover:opacity-100 z-10 p-24 backdrop-blur-sm '>
                cool
            </p>
              <img
                key={index}
                src={url}
                alt={`Meme ${index + 1}`}
                className=""
              />
            </GridItem>
          ))}
        </div>
      </main>
    </>
  )
}

export default Content