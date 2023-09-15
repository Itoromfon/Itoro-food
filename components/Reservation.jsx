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
            bg-cover
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
                        text-amber-400
                        mx-3
                        md:text-lg
                        text-md
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
          {/* <div className='md:flex justify-center mt-16'>
          <div className='flex flex-col justify-center items-center'>
            <Input
                className='
                    w-96
                    rounded-full
                    bg-gray-800
                    border border-gray-400
                    p-4
                '
            />
            <Input
                className='
                w-96
                rounded-full
                bg-gray-800
                border border-gray-400
                p-4
                mt-5
            '
            />
            <Input
                className='
                w-96
                rounded-full
                bg-gray-800
                border border-gray-400
                p-4
                mt-5

            '
            />
          </div>
          <div className='md:ml-6 md:mt-0 mt-10 flex flex-col justify-center items-center'>
              <Input
                  className='
                    w-96
                    rounded-full
                    bg-gray-800
                    border border-gray-400
                    p-4
                '
              />
              <Input
                  className='
                w-96
                rounded-full
                bg-gray-800
                border border-gray-400
                p-4
                mt-5
            '
              />
              <Input
                  className='
                w-96
                rounded-full
                bg-gray-800
                border border-gray-400
                p-3
                mt-5

            '
              />
          </div>
          </div> */}
          <div className='flex justify-center mt-10'>
          <Link
              href="#"
              className='
                    bg-yellow-600
                    text-white
                    px-10
                    py-3
                    rounded-full
                    text-lg
                    font-bold
                    md:flex
                    w-60
                '
          >
              Find Reservation
          </Link>
          </div>
    </div>
  )
}

export default Reservation