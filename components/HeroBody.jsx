import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from 'antd'
import HeroButton from './HeroButton'

function HeroBody() {
  return (
    <div className='flex justify-center'>
        <div className='md:mt-40 mt-28'>
                <div
                    className='
                        md:flex
                        md:ml-20
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
                        md:text-left    
                    '
                      >
                          Find Your Best <br /> Healthy & Tasty Food.
                      </h1>
                <p className='
                    text-white 
                    md:mt-11 
                    md:text-lg
                    md:text-left
                    text-sm
                    flex
                    justify-center
                    text-center
                    mt-5
                '
                >
                    It is a long established fact that a reader 
                    will be distracted by the <br />readable content of
                    a page.
                </p>
            </div>
            <div 
                className='
                    md:ml-20
                    md:justify-start 
                    mt-11
                    flex
                    justify-center
                '>
                <HeroButton />
            </div>
        </div>
        <div className='hidden md:flex'>
            <div className='md:ml-10'>
                <div 
                    className='
                        md:ml-40
                        md:-mb-32
                        sm:ml-0
                    '
                >
                    <Image
                        src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img111.png"
                        width={300}
                        height={300}
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
                        src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img333.png"
                        width={300}
                        height={300}
                        alt='Restho1'
                    />
                    <Image
                        src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img111.png"
                        width={300}
                        height={300}
                        alt='Restho1'
                    />
                </div>
                <div className='md:ml-40 -mt-32'>
                    <Image
                        src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img111.png"
                        width={300}
                        height={300}
                        alt='Restho1'
                    />
                </div>
            </div>     
        </div>
      </div>
  )
}

export default HeroBody