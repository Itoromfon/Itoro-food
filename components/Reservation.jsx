import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Reservation() {
  return (
    <div 
        className='
            md:mt-32
            mt-16
            pb-24
            md:flex
            md:flex-col
            bg-cover
            bg-center
            bg-[url("https://restho-nextjs.vercel.app/_next/static/media/h2-reservation-bg.ca77ecb0.png")]
    '>
          <div
              className='
                    pt-16
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
                        text-[#bf9444]
                        mx-3
                        md:text-lg
                        text-md
                        -mt-1
                    '
              >
                  Online Reserve
              </p>
              <Image
                  src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                  width={20}
                  height={20}
              />
          </div> 
          <div className='flex justify-center mt-5'>
              <h1 className='text-white md:text-5xl text-3xl text-center font-bold font-serif'>For Online Reservation</h1>
          </div>
          <div className='md:flex justify-center mt-5'>
            <div className='flex flex-col'>
            <div className='flex justify-center'>
                <input 
                    type='text'
                    placeholder='Name*'
                    className='
                        bg-gray-800 
                        rounded-full
                        m-3
                        px-6
                        py-4
                        w-96
                        border 
                        border-gray-400
                        text-gray-400
                    '    
                    />
                </div>
                <div className='flex justify-center'>
                    <input
                        type='text'
                        placeholder='People'
                        className='
                        bg-gray-800 
                        rounded-full
                        m-3
                        px-6
                        py-4
                        w-96
                        border 
                        border-gray-400
                        text-gray-400
                    '
                    />
                </div>
                <div className='flex justify-center'>
                    <input
                        type='text'
                        placeholder='08 : 00 am'
                        className='
                        bg-gray-800 
                        rounded-full
                        m-3 
                        px-6
                        py-4
                        w-96
                        border 
                        border-gray-400
                        text-gray-400
                    '
                    />
                </div>
            </div>
              <div className='flex flex-col'>
                <div className='flex justify-center'>
                  <input
                      type='text'
                      placeholder='Name*'
                      className='
                        bg-gray-800 
                        rounded-full
                        m-3
                        px-6
                        py-4
                        w-96
                        border 
                        border-gray-400
                        text-gray-400
                    '
                  />
                  </div>
                  <div className='flex justify-center'>
                  <input
                      type='text'
                      placeholder='People'
                      className='
                        bg-gray-800 
                        rounded-full
                        m-3
                        px-6
                        py-4
                        w-96
                        border 
                        border-gray-400
                        text-gray-400
                    '
                  />
                  </div>
                  <div className='flex justify-center'>
                  <input
                      type='text'
                      placeholder='08 : 00 am'
                      className='
                        bg-gray-800 
                        rounded-full
                        m-3 
                        px-6
                        py-4
                        w-96
                        border 
                        border-gray-400
                        text-gray-400
                    '
                  />
                  </div>
              </div> 
          </div>
          <div className='flex justify-center mt-10'>
              <button
                className='
                bg-[#bf9444]
                hover:bg-[#fff]
                hover:text-[#bf9444]
                transition-colors
                duration-500
                ease-linear
                text-white
                md:px-40
                px-28
                py-3.5
                rounded-full
                text-lg
                font-bold
                md:ml-4
                cursor-pointer
            '>
                  Reserve Now
              </button>
          </div>
    </div>
  )
}

export default Reservation