import React from 'react'
import Image from 'next/image'

function Gallery() {
  return (
    <div className='mt-20'>
          <div
              className='
                        md:flex
                        md:ml-20
                        flex
                        justify-center
                    '
          >
              <Image
                  src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                  width={20}
                  height={20}
              />
              <p className='
                        text-amber-400
                        mx-3
                        md:text-lg
                        text-md
                    '
              >
                  Gallery Store
              </p>
              <Image
                  src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                  width={20}
                  height={20}
              />
          </div>
          <div className='flex justify-center mt-5'>
            <h1 className='font-bold font-serif text-3xl md:text-5xl'>Our Special Gallery</h1>
          </div>
          <div className='md:flex mt-10 md:mt-20 mx-16'>
            <Image 
                  src="https://restho-nextjs.vercel.app/assets/images/bg/2col-gallery-big-01.png"
                  width={400}
                  height={500}
            />
            <Image 
                  src="https://restho-nextjs.vercel.app/assets/images/bg/2col-gallery-big-01.png"
                  width={400}
                  height={500}
                  className='mt-4 mb-4'
            />
            <Image 
                  src="https://restho-nextjs.vercel.app/assets/images/bg/2col-gallery-big-02.png"
                  width={400}
                  height={500}
            />
          </div>
    </div>
  )
}

export default Gallery