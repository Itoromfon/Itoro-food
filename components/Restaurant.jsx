import React from 'react'
import Image from 'next/image'
import { Button } from 'antd'
import { BsArrowUpRightCircle } from "react-icons/bs"

function Restaurant() {
  return (
    <div className='flex justify-between mx-10 md:mx-28'>
          <div className='hidden md:flex'>
              <div className='md:ml-10'>
                  <div
                      className='
                        md:ml-28
                        md:-mb-24
                        sm:ml-0
                    '
                  >
                      <Image
                          src="https://restho-nextjs.vercel.app/assets/images/bg/h2-about-img2.png"
                          width={200}
                          height={200}
                          alt='Restho1'
                      />
                  </div>
                  <div
                      className='
                        flex
                        ml-3
                    '
                  >
                      <Image
                          src="https://restho-nextjs.vercel.app/assets/images/bg/h2-about-img1.png"
                          width={200}
                          height={200}
                          alt='Restho1'
                      />
                      <Image
                          src="https://restho-nextjs.vercel.app/assets/images/bg/h2-about-img3.png"
                          width={200}
                          height={200}
                          alt='Restho1'
                      />
                  </div>
                  <div className='md:ml-28 -mt-24'>
                      <Image
                          src="https://restho-nextjs.vercel.app/assets/images/bg/h2-about-img4.png"
                          width={200}
                          height={200}
                          alt='Restho1'
                      />
                  </div>
              </div>
          </div>
          <div className='md:ml-28 md:flex flex-col m-auto'>
              <div
                  className='
                        md:flex
                        md:mb-5
                        md:justify-start
                        flex
                        justify-center
                        mb-8
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
                      About to Restho
                  </p>
                  <Image
                      src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                      width={20}
                      height={20}
                  />
              </div>
              <div className='flex'>
                  <h1 className='font-bold mb-5 md:text-left md:flex text-center font-serif text-2xl md:text-3xl'>Come to Our Restaurant, Ready <br />Your Food.</h1>  
              </div>
              <div className='m-auto w-96'>
                  It has survived not only five centuries, but also 
                  the leap into electronic typesetting, remaining 
                  essentially unchanged. It was popularised in the 
                  1960s with the release of Letraset sheets containing 
                  Lorem Ipsum passages, and more recently with desktop 
                  publishing software like Aldus PageMaker including 
                  versions of Lorem Ipsum.
              </div>
              <div className='md:flex mt-10'>
                <div className='flex justify-center'>
                <Image 
                      src="https://restho-nextjs.vercel.app/assets/images/icon/h2-about1.svg"
                      width={90}
                      height={90}
                      className='
                        border border-amber-400
                        rounded-lg
                        p-4
                      '
                />
                </div>
                <div className='flex flex-col ml-5 mt-8'>
                <h1 
                    className='
                        font-bold 
                        font-serif
                        text-xl
                        text-center
                    '>
                      Pure Fresh Food.
                </h1>
                  <p className='md:text-lg text-center text-gray-600'>We are serve different <br />type of fresh food.</p>
                  </div>
              </div>
              <div className='md:flex mt-10'>
                  <div className='flex justify-center'>
                      <Image
                          src="https://restho-nextjs.vercel.app/assets/images/icon/h2-about1.svg"
                          width={90}
                          height={90}
                          className='
                        border border-amber-400
                        rounded-lg
                        p-4
                      '
                      />
                  </div>
                  <div className='flex flex-col ml-5 mt-8'>
                      <h1
                          className='
                        font-bold 
                        font-serif
                        text-xl
                        text-center
                    '>
                          Experties Chef.
                      </h1>
                      <p className='md:text-lg text-center text-gray-600'>We are serve different <br />type of fresh food.</p>
                  </div>
              </div>
              <div className='mt-10 flex justify-center md:justify-start'>
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
                      Discover More
                  </Button>
              </div>
          </div>
    </div>
  )
}

export default Restaurant