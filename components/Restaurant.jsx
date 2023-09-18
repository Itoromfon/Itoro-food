import React from 'react'
import Image from 'next/image'
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
                        text-[#bf9444]
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
              <div className='w-96'>
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
                <img 
                      src="https://restho-nextjs.vercel.app/assets/images/icon/h2-about1.svg"
                      className='
                        border border-[#bf9444]
                        rounded-lg
                        p-4
                        md:w-[90px]
                        md:h-[90px]
                        w-[150px]
                        h-[120px]
                      '
                />
                </div>
                  <div className='flex flex-col ml-5 md:-mt-1 mt-6'>
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
                      <img
                        src="https://restho-nextjs.vercel.app/assets/images/icon/h2-about1.svg"
                        className='
                        border border-[#bf9444]
                        rounded-lg
                        p-4
                        md:w-[90px]
                        md:h-[90px]
                        w-[150px]
                        h-[120px]
                      '
                      />
                  </div>
                  <div className='flex flex-col ml-5 md:-mt-1 mt-6'>
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
                  <button 
                    className='
                        border
                        border-[#bf9444]
                        text-[#bf9444]
                        hover:bg-[#bf9444]
                        hover:text-white
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
                    Discover More
                  </button>
              </div>
          </div>
    </div>
  )
}

export default Restaurant