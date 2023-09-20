import React from 'react'
import Image from 'next/image'
import { BsArrowUpRightCircle } from 'react-icons/bs'

function MenuList() {
  return (
    <div className='xl:ml-16'>
    <div className='xl:flex xl:mx-20 mx-10 mt-12 xl:mt-20 justify-between'>
          <div
              className='
                        xl:flex
                        xl:justify-start
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
                        text-[#bf9444]
                        mx-3
                        xl:text-lg
                        text-md
                        xl:mt-8
                    '
              >
                  Menu List
              </p>
              <Image
                  src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                  width={20}
                  height={20}
              />
          </div>
          <div className='flex justify-center mt-9'>
                  <button
                      className='
                        border
                        border-[#bf9444]
                        text-[#000]
                        hover:bg-[#bf9444]
                        hover:text-#000
                        transition-colors
                        duration-500
                        ease-linear
                        font-bold
                        text-lg
                        px-10
                        py-3
                        rounded-full
                        cursor-pointer
                        flex
                    '>
                      <BsArrowUpRightCircle
                          className='
                            mr-3
                            mt-1
                        '
                      />
                      View More
                  </button>
          </div>
         </div>
         <div className='flex xl:justify-start justify-center mt-10 xl:mt-2 xl:mx-20 mx-10'>
            <h1 className='font-bold font-serif text-3xl xl:text-5xl'>Find Your Food Item</h1>
         </div>
    </div>
  )
}

export default MenuList