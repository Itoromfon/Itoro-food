import React from 'react'
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaTwitter 
} from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"

function Footer() {
  return (
    <div 
      className='
      w-full
      static
      bottom-0
      bg-gray-900
      text-white
      px-28
      md:pt-36
      pt-24
      pb-4
    '>
      <div>
        <h1 className='text-2xl md:text-left text-center font-bold font-serif'>Our Facilities</h1> 
      </div>
      <div className='md:flex'>
        <div className='flex justify-center md:justify-start'>
      <div>
        <p className='text-md text-gray-300 mt-8'>Indian Menu</p>
        <p className='text-md text-gray-300 mt-4'>Menu Item</p>
        <p className='text-md text-gray-300 mt-4'>Private Event</p>
        <p className='text-md text-gray-300 mt-4'>Italian Menu</p>
        <p className='text-md text-gray-300 mt-4'>Best Offer</p>
      </div>
        <div className='md:ml-16 ml-16'>
        <p className='text-md text-gray-300 mt-8'>Popular Item</p>
        <p className='text-md text-gray-300 mt-4'>Regular Menu</p>
        <p className='text-md text-gray-300 mt-4'>New Food</p>
        <p className='text-md text-gray-300 mt-4'>Special Offer</p>
      </div>
      </div>
      <div 
        className='
          flex 
          flex-col
          mx-auto
          rounded-full
          border
          border-gray-600
          md:w-[300px]
          md:h-[300px]
          w-[280px]
          h-[280px]
          md:ml-28
          md:-mt-20
          mt-10
      '>
      <div>
      <img 
          src="https://restho-nextjs.vercel.app/assets/images/header1-logo.svg"
          className='
            md:w-[180px]
            md:-h[180px]
            w-[150px]
            h-[150px]
            md:mb-5
            mb-5
            ml-16
          '
      />
      <h1 
        className='
        -mt-16
        font-bold
        text-lg
        tracking-widest
        text-center
      '
      >
        Established . 2022
      </h1>
    </div>
    <div 
      className='
        flex 
        justify-center
    '>
      <p className='text-[#bf9444]'>__________</p>
      <img 
          className='
            mt-3
            mx-4
          '
          src='https://restho-nextjs.vercel.app/assets/images/icon/footer-shape.svg'
      />
      <p className='text-[#bf9444]'>__________</p>
    </div>
      <div className='flex ml-16 mt-7'>
      <div 
        className='
          border
          border-[#bf9444]
          hover:bg-[#bf9444]
          p-1.5
          rounded-full
          cursor-pointer
      '>
        <FaFacebookF />
      </div>
        <div 
          className=' 
            ml-4
            border
            border-[#bf9444]
            hover:bg-[#bf9444]
            p-1.5
            rounded-full
            cursor-pointer
          '>
        <AiFillInstagram />
      </div>
      <div 
        className=' 
          ml-4
          border
          border-[#bf9444]
          hover:bg-[#bf9444]
          p-1.5
          rounded-full
          cursor-pointer
      '>
        <FaLinkedinIn />
      </div>
      <div 
        className=' 
          ml-4
          border
          border-[#bf9444]
          hover:bg-[#bf9444]
          p-1.5
          rounded-full
          cursor-pointer
      '>
        <FaTwitter />
      </div>
    </div>
    </div>
    <div 
      className='
        flex 
        flex-col
        md:ml-28
        md:-mt-8
        mt-10
    '>
    <div>
      <h1 
        className='
          text-2xl 
          font-bold 
          font-serif
          md:text-left
          text-center
      '>
        Address Info
      </h1>
    </div>
    <div>
      <p 
        className='
        text-md 
        text-gray-300 
        mt-8
        cursor-pointer
        hover:text-[#bf9444]
        md:text-left
        text-center
      '>
        <span 
          className='
          font-bold
          mr-2
          text-[#bf9444]
        '>
        Phone:
        </span>
          +880-1776-766-767
      </p>
        <p
        className='
        text-md 
        text-gray-300 
        mt-4
        cursor-pointer
        hover:text-[#bf9444]
        md:text-left
        text-center
      '>
        <span
          className='
          font-bold
          mr-2
          text-[#bf9444]
        '>
          Email:
        </span>
          info@example.com
        </p>
        <p
        className='
        text-md 
        text-gray-300 
        mt-8
        cursor-pointer
        hover:text-[#bf9444]
        md:text-left
        text-center
      '>
      <span
      className='
        font-bold
        mr-2
        text-[#bf9444]
      '>
        Fax ID:
      </span>
        +99-75667-786
      </p>
      <p
      className='
        text-md 
        text-gray-300 
        mt-8
        cursor-pointer
        hover:text-[#bf9444]
        md:text-left
        text-center
      '>
      <span
      className='
        font-bold
        mr-2
        text-[#bf9444]
      '>
        Location:
      </span>
          Mirpur DOHS,House-167/170,<br />
      <span className='ml-20'>Road-02 Avenue-01.</span> 
      </p>
    </div>
    </div>
    </div>
    <div 
      className='
        border 
        border-gray-600
        mt-20
    '>
    </div>
      <div className='md:flex md:justify-between mt-4'>
      <div>
          <p className='md:text-md text-sm text-center text-gray-300'>@Copyright by Egenslab-2023, All Right Reserved.</p>
      </div>
      <div>
          <p className='md:text-md text-sm text-center text-gray-300'>Privacy & Policy | Terms and Conditions</p>
      </div>
    </div>
    </div>
  )
}

export default Footer