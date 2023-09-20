import React, { useState } from 'react';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';

function NewItem() {
    // const slides = [
    //     {
    //         url: 'https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items12.png'
    //     },
    //     {
    //         url: 'https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items13.png'
    //     },
    //     {
    //         url: 'https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items11.png'
    //     }
    // ]

    // const prevSlide = () => {
    //     const isFirstSlide = currentIndex === 0;
    //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    //     setCurrentIndex(newIndex);
    // }

    // const nextSlide = () => {
    //     const isLastSlide = currentIndex === slides.length - 1;
    //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
    //     setCurrentIndex(newIndex);
    // };

    // const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div
            className='
            xl:mt-32
            mt-16
            xl:pb-12
            pb-20
            bg-cover
            bg-center
            xl:flex
            xl:flex-col
            bg-[url("https://restho-nextjs.vercel.app/_next/static/media/h2-regular-items-bg.28bec6e3.png")]
    '>
            <div
                className='
                    xl:flex
                    xl:mb-5
                    xl:justify-center
                    xl:pt-24
                    pt-16
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
                        xl:text-lg
                        text-md
                        -mt-1
                    '
                >
                    Our New item
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
                <h1 className='
                font-bold 
                font-serif 
                xl:text-5xl
                text-3xl
                text-white
            '>
                    Restho New Item List
                </h1>
            </div>
            <div className='flex mx-5 justify-center mt-3 xl:mt-5'>
                <p className='text-white text-center text-sm xl:text-lg'>
                    Various versions have evolved over the years, sometimes on purpose.
                </p>
            </div>
            <div className='xl:flex pb-20 justify-center'>
                <div>
                    <div className='flex justify-center'>
                        <img
                            className='
                            xl:w-[350px]
                            xl:h-[350px]
                            w-[250px]
                            h-[250px]
                        '
                            src="https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items12.png"
                        />
                    </div>
                    <div className='flex justify-center mt-5'>
                        <h1
                            className='
                            text-white
                            font-bold
                            font-serif
                            xl:text-2xl
                            text-xl
                        '>
                            Prawn with Noodles
                        </h1>
                    </div>
                    <div className='mt-5 flex justify-center'>
                        <p className='text-center text-gray-300 w-72 text-md'>It is a long established fact that a reader will be distracted.</p>
                    </div>
                </div>
                <div className='ml-10'>
                    <div className='flex justify-center'>
                        <img
                            className='
                            xl:w-[350px]
                            xl:h-[350px]
                            w-[250px]
                            h-[250px]
                        '
                            src="https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items13.png"
                        />
                    </div>
                    <div className='flex justify-center mt-5'>
                        <h1
                            className='
                            text-white
                            font-bold
                            font-serif
                            xl:text-2xl
                            text-xl
                        '>
                            Soup with Egg
                        </h1>
                    </div>
                    <div className='mt-5 flex justify-center'>
                        <p className='text-center text-gray-300 w-72 text-md'>It is a long established fact that a reader will be distracted.</p>
                    </div>
                </div>
                <div className='ml-10'>
                    <div className='flex justify-center'>
                        <img
                            className='
                            xl:w-[350px]
                            xl:h-[350px]
                            w-[250px]
                            h-[250px]
                        '
                            src="https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items11.png"

                        />
                    </div>
                    <div className='flex justify-center mt-5'>
                        <h1
                            className='
                            text-white
                            font-bold
                            font-serif
                            xl:text-2xl
                            text-xl
                        '>
                            Prawn Fried
                        </h1>
                    </div>
                    <div className='mt-5 flex justify-center'>
                        <p className='text-center text-gray-300 w-72 text-md'>It is a long established fact that a reader will be distracted.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default NewItem










































{/* <div 
        className='
            h-[300px]
            w-[300px]
            m-auto
            relative
            group
        '>
        <div 
        style={{backgroundImage: `url(${slides[currentIndex].url})`}}
        className='
            w-full
            h-full
            rounded-2xl
            bg-center
            bg-cover
            duration-500
        '>
          </div>
        <div 
            className='
            hidden
            group-hover:block
            absolute 
            top-[50%]
            -translate-x-0
            translate-y-[-50%]
            left-5
            text-2xl
            rounded-full
            p-2
            bg-black/20
            text-white
            cursor-pointer
        '>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div 
            className='
            hidden
            group-hover:block
            absolute 
            top-[50%]
            -translate-x-0
            translate-y-[-50%]
            right-5
            text-2xl
            rounded-full
            p-2
            bg-black/20
            text-white
            cursor-pointer
        '>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        </div> */}









































































