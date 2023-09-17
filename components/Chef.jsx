import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"


function Chef() {
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
                    -mt-1
                '
            >
                Our Experties
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
              <h1 className='font-bold font-serif text-3xl md:text-5xl'>Restho's Best Chef</h1>
        </div>
        <div className='md:flex mx-16 mt-10'>
              <div className='md:mt-2 mt-8'>
              <div className='flex justify-center'>
                <img
                    className='
                    md:w-[400px]
                    md:h-[330px]
                    w-[350px]
                    h-[250px]
                    rounded-lg
                '
                  src="https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen1.png"
                />
                </div>
            <h1 className='mt-5 text-gray-800 text-center text-2xl font-bold font-serif'>Mr. Willium Jhon</h1>
            <p className='mt-3 text-gray-600 text-center'>Chef of Head</p>
            <div className='flex gap-16 justify-center mt-3'>
                      <FaFacebookF className='text-gray-500 cursor-pointer' />
                      <AiFillInstagram className='text-gray-500 cursor-pointer' />
                      <FaLinkedinIn className='text-gray-500 cursor-pointer' />
                      <BsTwitter className='text-gray-500 cursor-pointer' />
            </div>
        </div>
            <div className='md:mt-2 mt-8'>
            <div className='flex justify-center'>
                <img
                    className='
                    md:w-[400px]
                    md:h-[330px]
                    w-[350px]
                    h-[250px]
                    rounded-lg
                    ml-5
                '
                  src="https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen2.png"
                />
            </div>
                <h1 className='mt-5 text-gray-800 text-center text-2xl font-bold font-serif'>Mr. Willium Jhon</h1>
                <p className='mt-3 text-gray-600 text-center'>Chef of Head</p>
                <div className='flex gap-16 justify-center mt-3'>
                      <FaFacebookF className='text-gray-500 cursor-pointer' />
                      <AiFillInstagram className='text-gray-500 cursor-pointer' />
                      <FaLinkedinIn className='text-gray-500 cursor-pointer' />
                      <BsTwitter className='text-gray-500 cursor-pointer' />
                </div>
        </div>
            <div className='md:mt-2 mt-8'>
            <div className='flex justify-center'>
                <img
                    className='
                    md:w-[400px]
                    md:h-[330px]
                    w-[350px]
                    h-[250px]
                    rounded-lg
                    ml-5
                '
                  src="https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen3.png"
                />
            </div>
                  <h1 className='mt-5 text-gray-800 text-center text-2xl font-bold font-serif'>Mr. Willium Jhon</h1>
                  <p className='mt-3 text-gray-600 text-center'>Chef of Head</p>
                  <div className='flex gap-16 justify-center mt-3'>
                      <FaFacebookF className='text-gray-500 cursor-pointer' />
                      <AiFillInstagram className='text-gray-500 cursor-pointer' />
                      <FaLinkedinIn className='text-gray-500 cursor-pointer' />
                      <BsTwitter className='text-gray-500 cursor-pointer' />
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Chef