import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from 'antd'
import HeroButton from './HeroButton'

function HeroBody() {
  return (
    <div className='flex justify-center'>
        <div className='xl:mt-40 mt-28'>
                <div
                    className='
                        xl:flex
                        xl:ml-20
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
                        md:text-lg
                        text-md
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
                <div className='md:ml-20 ml-5'>
                      <h1 className='
                        text-white 
                        md:text-5xl font-bold
                        font-serif
                        md:mt-5
                        mt-8
                        text-2xl 
                        flex
                        justify-center
                        text-center 
                        xl:text-left    
                    '
                      >
                      Find Your Best Healthy <br /> & Tasty Food.
                      </h1>
                <p className='
                    text-white 
                    xl:mt-11 
                    xl:text-lg
                    xl:justify-start
                    text-sm
                    flex
                    justify-center
                    mt-5
                '
                >
                    It is a long established fact that a reader 
                    will <br /> be distracted by the readable content of
                    a page.
                </p>
            </div>
            <div 
                className='
                    xl:ml-20
                    xl:justify-start 
                    mt-11
                    flex
                    justify-center
                '>
                <HeroButton />
            </div>
        </div>
        <div className='hidden xl:flex'>
            <div className='md:ml-10'>
                <div 
                    className='
                        md:ml-40
                        md:-mb-32
                    '
                >
                    <img
                        className='
                            xl:w-[280px]
                            xl:h-[280px]
                            w-[250px]
                            h-[250px]
                        '
                        src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img111.png"
                        alt='Restho1'
                    />
                </div>
                <div 
                    className='
                        flex
                        ml-3
                    '
                    >
                    <img
                        className='
                            xl:w-[280px]
                            xl:h-[280px]
                            w-[250px]
                            h-[250px]
                            ml-1
                        '
                        src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img333.png"
                        alt='Restho1'
                    />
                    <img
                        className='
                            xl:w-[280px]
                            xl:h-[280px]
                            w-[250px]
                            h-[250px]
                            ml-2
                        '
                          src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img222.png"
                        alt='Restho1'
                    />
                </div>
                <div className='md:ml-40 -mt-32'>
                    <img
                        className='
                            xl:w-[280px]
                            xl:h-[280px]
                            w-[250px]
                            h-[250px]
                        '
                        src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img444.png"
                        alt='Restho1'
                    />
                </div>
            </div>     
        </div>
      </div>
  )
}

export default HeroBody