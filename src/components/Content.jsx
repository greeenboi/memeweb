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
    <main className='min-h-screen'>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} className='mt-12 mb-12 md:mr-24 md:ml-24 '>
      {imageUrls.map((url, index) => (
        <GridItem className='max-h-64 gap-12 p-2 border border-emerald-600 rounded-md flex flex-row justify-center items-center ' >
          <p className='absolute font-inter text-lg w-max h-max opacity-0 hover:opacity-100 z-10 p-24 backdrop-blur-sm '>
              cool
          </p>
            <img
              key={index}
              src={url}
              alt={`Meme ${index + 1}`}
              className="transition-all "
            />
          </GridItem>
        ))}
      </Grid>
    </main>
    </>
  )
}

export default Content