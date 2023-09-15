import React from 'react'
import Image from 'next/image'

function NewItem() {
  return (
    <div 
        className='
            md:mt-32
            mt-16
            md:pb-24
            pb-56
            bg-cover
            md:flex
            md:flex-col
            bg-[url("https://restho-nextjs.vercel.app/_next/static/media/h2-regular-items-bg.28bec6e3.png")]
    '>
          <div
              className='
                    md:flex
                    md:mb-5
                    md:justify-center
                    md:pt-24
                    pt-16
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
                  Our New item
              </p>
              <Image
                  src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                  width={20}
                  height={20}
              />
          </div>
          <div className='flex justify-center mt-5'>
            <h1 className='
                font-bold 
                font-serif 
                md:text-5xl
                text-3xl
                text-white
            '>
                Restho New Item List
            </h1>
          </div>
          <div className='flex mx-5 justify-center mt-3 md:mt-5'>
            <p className='text-white text-center text-sm md:text-lg'>
                  Various versions have evolved over the years, sometimes on purpose.
            </p>
          </div>
          <div className='md:flex pb-16 justify-center'>
            <div>
                <div className='flex justify-center'>
                    <Image
                          width={200}
                          height={200}
                        src="https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items12.png"
                    />
                </div>
                <div className='flex justify-center mt-5'>
                    <h1 
                        className='
                            text-white
                            font-bold
                            font-serif
                            md:text-2xl
                            text-xl
                        '>
                        Prawn with Noodles
                    </h1>
                </div>
                <div className='mt-5 flex justify-center'>
                    <p className='text-center text-gray-300 w-72 text-md'>It is a long established fact that a reader will be distracted.</p>
                </div>
            </div>
            <div className='ml-10'>
                <div className='flex justify-center'>
                    <Image
                        width={200}
                        height={200}
                        src="https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items13.png"
                    />
                </div>
                  <div className='flex justify-center mt-5'>
                      <h1
                          className='
                            text-white
                            font-bold
                            font-serif
                            md:text-2xl
                            text-xl
                        '>
                          Soup with Egg
                      </h1>
                  </div>
                  <div className='mt-5 flex justify-center'>
                      <p className='text-center text-gray-300 w-72 text-md'>It is a long established fact that a reader will be distracted.</p>
                  </div>
            </div>
            <div className='ml-10'>
                <div className='flex justify-center'>
                    <Image
                        width={200}
                        height={200}
                        src="https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items11.png"

                    />
                </div>
                  <div className='flex justify-center mt-5'>
                      <h1
                          className='
                            text-white
                            font-bold
                            font-serif
                            md:text-2xl
                            text-xl
                        '>
                          Prawn Fried
                      </h1>
                  </div>
                  <div className='mt-5 flex justify-center'>
                      <p className='text-center text-gray-300 w-72 text-md'>It is a long established fact that a reader will be distracted.</p>
                  </div>
            </div>
          </div>
    </div>
  )
}

export default NewItem
