import React from 'react'

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
              <img
                  className='
                    w-[20px]
                    h-[20px]
                  '
                  src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
              />
              <p className='
                        text-[#bf9444]
                        mx-3
                        md:text-lg
                        text-md
                    '
              >
                  Gallery Store
              </p>
              <img
                  className='
                    w-[20px]
                    h-[20px]
                  '
                  src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
              />
          </div>
          <div className='flex justify-center mt-5'>
            <h1 className='font-bold font-serif text-3xl md:text-5xl'>Our Special Gallery</h1>
          </div>
          <div className='md:flex justify-center mt-11'>
          <div className='flex justify-center'>
          <img
            className='
                    md:w-[400px]
                    md:h-[330px]
                    w-[350px]
                    h-[250px]
                  '
              src="https://restho-nextjs.vercel.app/assets/images/bg/2col-gallery-big-01.png"
            />
          </div>
          <div className='flex justify-center'>
          <img
            className='
                    md:w-[400px]
                    md:h-[330px]
                    w-[350px]
                    h-[250px]
                    mt-4 
                    mb-4
                  '
                src="https://restho-nextjs.vercel.app/assets/images/bg/2col-gallery-big-01.png"
            />
           </div> 
           <div className='flex justify-center'>
          <img
            className='
                    md:w-[400px]
                    md:h-[330px]
                    w-[350px]
                    h-[250px]
                  '
                src="https://restho-nextjs.vercel.app/assets/images/bg/2col-gallery-big-02.png"
            />
            </div>
          </div>
    </div>
  )
}

export default Gallery