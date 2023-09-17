import React from 'react';
import Image from "next/image";
import NavBar from './NavBar';
import Link from 'next/link';
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci"
import HeroBody from './HeroBody';

function HeroSection() {
  return (
    <div 
        className='
            bg-black
            md:pb-20
            pb-8
            
        '
    >
        <div 
            className='
                md:flex
                md:justify-between
                md:px-20
                md:pt-4
                px-10
                pt-10
            '
            >
            <div>
                  <p className='text-[#bf9444] text-md text-center'>
                    Opening Hour:
                    <span className='text-white ml-3'>
                        9.00am - 10.00am
                    </span>
                </p>
            </div>
            <div className='md:flex hidden'>
                <Link 
                    className='
                    text-white
                    flex
                    '
                    href="#"
                >
                    <div className='pt-1'>
                          <AiOutlineMail
                            className='
                        text-[#bf9444]
                        '
                        />
                    </div>
                    
                    <p className='
                        hover:text-[#bf9444]
                        ml-2
                    '
                    >
                        info@example.com
                    </p>
                </Link>
                <Link
                    className='
                    text-white
                        ml-10
                        flex
                    '
                    href="#">
                    <div className='pt-1'>
                          <CiLocationOn
                            className='
                            text-amber-400
                            '
                        />
                    </div>
                    <p className='
                        hover:text-amber-400
                        ml-2
                        '
                        >
                        Road-01, Block-B, West London City
                    </p>
                </Link>
            </div>
        </div>
        <NavBar />
        <HeroBody />
    </div>
  )
}

export default HeroSection


































































































































{/* <Image 
            alt='Logo'
            width="100"
            height="100"
            src="/images/reactjs-icon.png"
        /> */}