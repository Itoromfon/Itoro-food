import React from 'react'
import Image from 'next/image'
import { AiOutlineLine } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import { FaFacebookF } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"


function Chef() {
  return (
    <div className='mt-20'>
          <div
              className='
                    pt-16
                    xl:flex
                    xl:ml-20
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
                        -mt-1
                    '
              >
                  Our Experties
              </p>
              <Image
                  src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                  width={20}
                  height={20}
              />
          </div>
          <div className='flex justify-center mt-7'>
              <h1 className='font-bold font-serif text-3xl xl:text-5xl'>Restho's Best Chef</h1>
          </div>
          <div className='xl:flex justify-center mt-10'>
              <div className='flex flex-col justify-center xl:mt-0 mt-10'>
                <div
                className='
                relative
                xl:ml-0
                m-auto
                rounded-t-lg
                bg-center
                bg-cover
                xl:w-[302px]
                xl:h-[250px]
                w-[270px]
                h-[210px]
                bg-[url("https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen1.png")]
            '>
            </div>
                  <div
                    className='
                    border 
                    border-gray-200 
                    rounded-lg 
                    m-auto
                    xl:px-10
                    px-11
                    xl:pt-24
                    pt-14 
                    pb-8
                    xl:-mt-20
                    -mt-9
                '
                  >
                      <h1 className='mt-5 text-gray-800 text-center text-xl xl:text-2xl font-bold font-serif'>Mr. Willium Jhon</h1>
                        <p className='mt-3 text-gray-600 text-center'>Chef of Head</p>
                        <div className='flex gap-7 justify-center mt-3'>
                        <FaFacebookF className='text-gray-500 cursor-pointer' />
                        <AiFillInstagram className='text-gray-500 cursor-pointer' />
                        <FaLinkedinIn className='text-gray-500 cursor-pointer' />
                        <BsTwitter className='text-gray-500 cursor-pointer' />
                    </div>
                  </div>
              </div>
              <div className='flex flex-col justify-center mx-7 xl:mt-0 mt-10'>
                <div
                className='
                relative
                xl:ml-0
                m-auto
                rounded-t-lg
                bg-center
                bg-cover
                xl:w-[310px]
                xl:h-[250px]
                w-[275px]
                h-[210px]
                bg-[url("https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen2.png")]
            '>
            </div>
                  <div
                    className='
                    border 
                    border-gray-200 
                    rounded-lg 
                    m-auto
                    xl:px-20
                    px-16
                    xl:pt-24
                    pt-14 
                    pb-8
                    xl:-mt-20
                    -mt-9
                '
                  >
                      <h1 className='mt-5 text-gray-800 text-center text-xl xl:text-2xl font-bold font-serif'>Mile Woatson</h1>
                      <p className='mt-3 text-gray-600 text-center'>Chef of Head</p>
                      <div className='flex gap-7 justify-center mt-3'>
                          <FaFacebookF className='text-gray-500 cursor-pointer' />
                          <AiFillInstagram className='text-gray-500 cursor-pointer' />
                          <FaLinkedinIn className='text-gray-500 cursor-pointer' />
                          <BsTwitter className='text-gray-500 cursor-pointer' />
                      </div>
                  </div>
              </div>
              <div className='flex flex-col justify-center xl:mt-0 mt-10'>
                <div
                className='
                relative
                xl:ml-0
                m-auto
                rounded-t-lg
                bg-center
                bg-cover
                xl:w-[302px]
                xl:h-[250px]
                w-[270px]
                h-[210px]
                bg-[url("https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen3.png")]
            '>
                  </div>
                  <div
                    className='
                    border 
                    border-gray-200 
                    rounded-lg 
                    m-auto
                    xl:px-12
                    px-8
                    xl:pt-24
                    pt-14 
                    pb-8
                    xl:-mt-20
                    -mt-9
                '
                  >
                      <h1 className='mt-5 text-gray-800 text-center text-xl xl:text-2xl font-bold font-serif'>Mr. Robert Jhon</h1>
                      <p className='mt-3 text-gray-600 text-center'>Chef of Head</p>
                      <div className='flex gap-7 justify-center mt-3'>
                          <FaFacebookF className='text-gray-500 cursor-pointer' />
                          <AiFillInstagram className='text-gray-500 cursor-pointer' />
                          <FaLinkedinIn className='text-gray-500 cursor-pointer' />
                          <BsTwitter className='text-gray-500 cursor-pointer' />
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Chef
































































































//     < div
// className = '
// md: flex
// md: ml - 20
// flex
// justify - center

// '
//     >
//             <img
//                 className='
//                     w-[20px]
//                     h-[20px]
//                 '
//                 src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
//             />
//             <p className='
//                     text-[#bf9444]
//                     mx-3
//                     md:text-lg
//                     text-md
//                     -mt-1
//                 '
//             >
//                 Our Experties
//             </p>
//               <img
//                   className='
//                     w-[20px]
//                     h-[20px]
//                 '
//                 src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
//             />
//         </ >
//         <div className='flex justify-center mt-5'>
//               <h1 className='font-bold font-serif text-3xl md:text-5xl'>Restho's Best Chef</h1>
//         </div>
//         <div className='md:flex mx-16 mt-10'>
//               <div className='md:mt-2 mt-8'>
//               <div className='flex justify-center'>
//                 <img
//                     className='
//                     md:w-[350px]
//                     md:h-[300px]
//                     w-[350px]
//                     h-[250px]
//                     rounded-t-lg
//                 '
//                   src="https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen1.png"
//                 />
//                 </div>
//             <h1 className='mt-5 text-gray-800 text-center text-2xl font-bold font-serif'>Mr. Willium Jhon</h1>
//             <p className='mt-3 text-gray-600 text-center'>Chef of Head</p>
//             <div className='flex gap-16 justify-center mt-3'>
//                       <FaFacebookF className='text-gray-500 cursor-pointer' />
//                       <AiFillInstagram className='text-gray-500 cursor-pointer' />
//                       <FaLinkedinIn className='text-gray-500 cursor-pointer' />
//                       <BsTwitter className='text-gray-500 cursor-pointer' />
//             </div>
//         </div>
//             <div className='md:mt-2 mt-8'>
//             <div className='flex justify-center'>
//                 <img
//                     className='
//                     md:w-[350px]
//                     md:h-[300px]
//                     w-[350px]
//                     h-[250px]
//                     rounded-t-lg
//                     ml-5
//                 '
//                   src="https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen2.png"
//                 />
//             </div>
//                 <h1 className='mt-5 text-gray-800 text-center text-2xl font-bold font-serif'>Mr. Willium Jhon</h1>
//                 <p className='mt-3 text-gray-600 text-center'>Chef of Head</p>
//                 <div className='flex gap-16 justify-center mt-3'>
//                       <FaFacebookF className='text-gray-500 cursor-pointer' />
//                       <AiFillInstagram className='text-gray-500 cursor-pointer' />
//                       <FaLinkedinIn className='text-gray-500 cursor-pointer' />
//                       <BsTwitter className='text-gray-500 cursor-pointer' />
//                 </div>
//         </div>
//             <div className='md:mt-2 mt-8'>
//             <div className='flex justify-center'>
//                 <img
//                     className='
//                     md:w-[350px]
//                     md:h-[300px]
//                     w-[350px]
//                     h-[250px]
//                     rounded-t-lg
//                     ml-5
//                 '
//                   src="https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen3.png"
//                 />
//             </div>
//                   <h1 className='mt-5 text-gray-800 text-center text-2xl font-bold font-serif'>Mr. Willium Jhon</h1>
//                   <p className='mt-3 text-gray-600 text-center'>Chef of Head</p>
//                   <div className='flex gap-16 justify-center mt-3'>
//                       <FaFacebookF className='text-gray-500 cursor-pointer' />
//                       <AiFillInstagram className='text-gray-500 cursor-pointer' />
//                       <FaLinkedinIn className='text-gray-500 cursor-pointer' />
//                       <BsTwitter className='text-gray-500 cursor-pointer' />
//                   </div>
//             </div>
//         </div>