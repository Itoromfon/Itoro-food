import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLine } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs"

function OurBlog() {
    return (
        <div className='md:mb-44 mb-24'>
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
            <div className='flex justify-center mt-7'>
                <h1 className='font-bold font-serif text-3xl md:text-5xl'>Our Latest Blog</h1>
            </div>
            <div className='md:flex justify-center mt-10'>
                <div className='flex flex-col justify-center md:mt-0 mt-10'>
                <div
                className='
                relative
                md:ml-8
                m-auto
                rounded-lg
                bg-center
                bg-cover
                md:w-[300px]
                md:h-[250px]
                w-[270px]
                h-[210px]
                bg-[url("https://restho-nextjs.vercel.app/assets/images/bg/h2-blog1.png")]
            '>
                <button
                href="#"
                className='
                rounded-lg 
                text-white 
                absolute 
                px-4 
                py-2 
                m-4 
                top-0 
                right-0 
                bg-white 
                hover:bg-[#bf9444]
                hover:text-white
                transition-colors
                duration-500
                ease-linear
            '>
                    <h1
                    className='
                    text-[#bf9444]
                    font-bold 
                    text-xl
                    hover:text-white
                '
                    >
                        17
                    </h1>
                    <p
                    className='
                    text-[#bf9444]
                    text-sm
                    hover:text-white
                    '
                    >
                        Apr
                    </p>
                </button>
                    </div>
                    <div
                        className='
                    border 
                    border-gray-200 
                    rounded-lg 
                    m-auto
                    md:px-16 
                    px-10
                    md:pt-24
                    pt-14 
                    pb-8
                    md:-mt-20
                    -mt-9
                '
                    >
                        <div className='flex justify-center mt-8'>
                            <AiOutlineLine
                                className='text-gray-500 -mt-0.5 w-[30px] h-[30px]'
                            />
                            <p className='text-gray-500'>By Clone Watson</p>
                        </div>
                        <div className='flex justify-center mt-3'>
                            <h1
                                className='
                        font-bold
                        font-serif
                        text-xl
                    '
                            >
                                To make Good Health <br />Take Nutrition Food.
                            </h1>
                        </div>
                        <div className='flex justify-center mt-4'>
                        <button
                        className='
                        bg-white 
                        border 
                        border-[#bf9444]
                        hover:bg-[#bf9444]
                        transition-colors
                        duration-500
                        ease-linear
                        px-16
                        py-3.5
                        rounded-full
                        '
                        >
                        <BsArrowRight
                        className='
                            hover:text-white
                            text-[#bf9444]
                        '
                                />
                        </button>
                        </div>
                    </div>
                </div>
                <div
                    className='
                    flex 
                    flex-col 
                    justify-center 
                    md:mt-0 
                    mt-10
                    ml-7
                '
                >
                <div
                className='
                relative
                md:ml-9
                m-auto
                rounded-lg
                bg-center
                bg-cover
                md:w-[300px]
                md:h-[250px]
                w-[270px]
                h-[210px]
                bg-[url("https://restho-nextjs.vercel.app/assets/images/bg/h2-blog2.png")]
            '>
                <button
                href="#"
                className='
                rounded-lg 
                text-white 
                absolute 
                px-4 
                py-2 
                m-4 
                top-0 
                right-0 
                bg-white 
                hover:bg-[#bf9444]
                transition-colors
                duration-500
                ease-linear
                hover:text-white
            '>
                <h1
                className='
                text-[#bf9444] 
                font-bold 
                text-xl
                hover:text-white
                '
                >
                    18
                </h1>
                <p
                className='
                text-[#bf9444] 
                text-sm
                hover:text-white
                '
                        >
                            Apr
                        </p>
                    </button>
                    </div>
                    <div
                    className='
                    border 
                    border-gray-200 
                    rounded-lg 
                    md:ml-0
                    m-auto
                    md:px-10
                    px-3
                    md:pt-24
                    pt-14 
                    pb-8
                    md:-mt-20
                    -mt-9
                '
                    >
                        <div className='flex justify-center mt-8'>
                            <AiOutlineLine
                                className='text-gray-500 -mt-0.5 w-[30px] h-[30px]'
                            />
                            <p className='text-gray-500'>By Hilary Watson</p>
                        </div>
                        <div className='flex justify-center mt-3'>
                            <h1
                                className='
                        font-bold
                        font-serif
                        text-xl
                    '
                            >
                                Eat at Some Nutrition Food <br />& Happy Leadlife.
                            </h1>
                        </div>
                        <div className='flex justify-center mt-4'>
                        <button
                        className='
                        bg-white 
                        border 
                        border-[#bf9444]
                        hover:bg-[#bf9444]
                        transition-colors
                        duration-500
                        ease-linear
                        px-16
                        py-3.5
                        rounded-full
                    '
                            >
                            <BsArrowRight
                            className='
                            hover:text-white
                            text-[#bf9444]
                        '
                        />
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className='
                    flex 
                    flex-col 
                    ml-7 
                    justify-center 
                    md:mt-0 
                    mt-10
                '
                >
                    <div
                    className='
                    relative
                    md:ml-8
                    m-auto
                    rounded-lg
                    bg-center
                    bg-cover
                    md:w-[300px]
                    md:h-[250px]
                    w-[270px]
                    h-[210px]
                    bg-[url("https://restho-nextjs.vercel.app/assets/images/bg/h2-blog3.png")]
            '>
                <button
                href="#"
                className='
                rounded-lg 
                text-white 
                absolute 
                px-4 
                py-2 
                m-4 
                top-0 
                right-0 
                bg-white 
                hover:bg-[#bf9444]
                transition-colors
                duration-500
                ease-linear
                hover:text-white
            '>
                <h1
                className='
                text-[#bf9444] 
                font-bold 
                text-xl
                hover:text-white
                '
            >
                17
            </h1>
            <p
                className='
                text-[#bf9444]
                text-sm
                hover:text-white
                '
                >
                    Apr
                </p>
                </button>
                    </div>
                    <div
                        className='
                    border 
                    border-gray-200 
                    rounded-lg 
                    m-auto
                    md:px-16 
                    px-10
                    md:pt-24
                    pt-14 
                    pb-8
                    md:-mt-20
                    -mt-9
                '
                    >
                        <div className='flex justify-center mt-8'>
                            <AiOutlineLine
                                className='text-gray-500 -mt-0.5 w-[30px] h-[30px]'
                            />
                            <p className='text-gray-500'>By Clone Watson</p>
                        </div>
                        <div className='flex justify-center mt-3'>
                            <h1
                                className='
                        font-bold
                        font-serif
                        text-xl
                    '
                            >
                                Easy To Make Some <br />Special Food in Home.
                            </h1>
                        </div>
                        <div className='flex justify-center mt-4'>
                        <button
                        className='
                        bg-white 
                        border 
                        border-[#bf9444]
                        px-16
                        py-3.5
                        rounded-full
                        hover:bg-[#bf9444]
                        transition-colors
                        duration-500
                        ease-linear
                    '
                            >
                            <BsArrowRight
                            className='
                            text-[#bf9444]
                            hover:text-white
                        '
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurBlog