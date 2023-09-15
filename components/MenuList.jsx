import React from 'react'
import Image from 'next/image'
import { Button } from 'antd'
import { BsArrowUpRightCircle } from 'react-icons/bs'

function MenuList() {
  return (
    <div>
    <div className='md:flex md:mx-20 mx-10 mt-10 md:mt-20 justify-between'>
          <div
              className='
                        md:flex
                        md:justify-start
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
                        md:mt-8
                    '
              >
                  Welcome To Restho
              </p>
              <Image
                  src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                  width={20}
                  height={20}
              />
          </div>
          <div className='flex justify-center mt-9'>
              <Button
                  width={200}
                  height={100}
                  className='
                    rounded-full
                    md:text-lg
                    text-md
                    text-amber-400
                    border-amber-400
                    md:px-10
                    md:py-4
                    md:pb-10
                    px-8
                    py-3
                    pb-8
                    flex
            '
              >
                  <BsArrowUpRightCircle
                      className='
                            mr-3
                            mt-1
                        '
                  />
                  View More
              </Button>
          </div>
         </div>
         <div className='flex justify-center mt-10 md:mx-20 mx-10'>
            <h1 className='font-bold font-serif text-3xl md:text-5xl'>Find You Food Item</h1>
         </div>
    </div>
  )
}

export default MenuList