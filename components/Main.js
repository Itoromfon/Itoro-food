import React from 'react'
import Image from 'next/image'

function Main() {
  return (
    <div className='md:flex justify-center mb-20 mt-16 ml'>
    <div className='md:flex'>
    <div className='flex justify-center'>
        <Image 
            width={150}
            height={150}
            src="https://restho-nextjs.vercel.app/assets/images/bg/h2-product-1.png"
        />
    </div>
        <div className='flex flex-col ml-5 mt-5'>
        <div className='flex md:flex md:justify-start justify-center'>
            <h1 className='font-bold font-serif text-xl'>vegetarian</h1>
        </div>
        <div className='flex justify-center'>
              <p>Lorem ipsum dolor sit amet <br />consectet.</p>
        </div>
        </div>
    </div>
          <div className='md:flex md:ml-5'>
              <div className='flex justify-center'>
                  <Image
                      width={150}
                      height={150}
                      src="https://restho-nextjs.vercel.app/assets/images/bg/h2-product-2.png"
                  />
              </div>
              <div className='flex flex-col ml-5 mt-5'>
                  <div className='flex md:flex md:justify-start justify-center'>
                      <h1 className='font-bold font-serif text-xl'>Thai Soup</h1>
                  </div>
                  <div className='flex justify-center'>
                      <p>Lorem ipsum dolor sit amet <br />consectet.</p>
                  </div>
              </div>
          </div>
          <div className='md:flex md:ml-5'>
              <div className='flex justify-center'>
                  <Image
                      width={150}
                      height={150}
                      src="https://restho-nextjs.vercel.app/assets/images/bg/h2-product-3.png"
                  />
              </div>
              <div className='flex flex-col ml-5 mt-5'>
                  <div className='flex md:flex md:justify-start justify-center'>
                      <h1 className='font-bold font-serif text-xl'>Sea Food</h1>
                  </div>
                  <div className='flex justify-center'>
                      <p>Lorem ipsum dolor sit amet <br />consectet.</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Main

// <div 
    //     className='
    //         md:mt-40
    //         mt-20
    //         md:justify-center
    //         md:flex

    //     '>
    //     <div className='md:flex flex flex-col justify-center ml-16 mb-20'>
    //         <Image 
    //             className='md:-mt-7 md:-ml-72 absolute'
    //             width={150} 
    //             height={150} 
    //               src="https://restho-nextjs.vercel.app/assets/images/bg/h2-product-1.png"
    //         />
    //         <div className='
    //             border 
    //             border-gray-300
    //             md:px-5
    //             py-2 
    //             md:w-72
    //             w-64
    //             h-24
    //             ml-12
    //             mr-11
    //             md:pl-20
    //             pl-16
    //             mt-56
    //         '>
    //             <h1 className='
    //                 font-bold 
    //                 font-serif 
    //                 md:text-md
    //                 text-md
    //                 text-gray-700
    //             '>
    //                 vegetarian
    //             </h1>
    //               <p className='text-gray-500 w-64 text-sm md:text-md'>Lorem ipsum dolor sit amet <br/>consectet.</p>
    //         </div>
    //     </div>
    //       <div className='flex justify-center ml-16 mb-20 md:ml-10'>
    //           <Image
    //               className='-mt-7 -ml-72 absolute'
    //               width={150}
    //               height={150}
    //               src="https://restho-nextjs.vercel.app/assets/images/bg/h2-product-2.png"
    //           />
    //           <div className='
    //             border 
    //             border-gray-300
    //             md:px-5
    //             py-2 
    //             md:w-72
    //             w-64
    //             h-24
    //             ml-12
    //             mr-11
    //             md:pl-20
    //             pl-16
    //         '>
    //               <h1 className='
    //                 font-bold 
    //                 font-serif 
    //                 md:text-xl
    //                 text-md
    //                 text-gray-700
    //             '>
    //                   Thai Soup
    //               </h1>
    //               <p className='text-gray-500 w-64 text-sm md:text-md'>Lorem ipsum dolor sit amet <br />consectet.</p>
    //           </div>
    //       </div>
    //       <div className='flex justify-center ml-16 mb-20 md:ml-10'>
    //           <Image
    //               className='-mt-7 -ml-72 absolute'
    //               width={150}
    //               height={150}
    //               src="https://restho-nextjs.vercel.app/assets/images/bg/h2-product-3.png"
    //           />
    //           <div className='
    //             border 
    //             border-gray-300
    //             md:px-5
    //             py-2 
    //             md:w-72
    //             w-64
    //             h-24
    //             ml-12
    //             mr-11
    //             md:pl-20
    //             pl-16
    //         '>
    //               <h1 className='
    //                 font-bold 
    //                 font-serif 
    //                 md:text-xl
    //                 text-md
    //                 text-gray-700
    //             '>
    //                   Sea Food
    //               </h1>
    //               <p className='text-gray-500 w-64 text-sm md:text-md'>Lorem ipsum dolor sit amet <br />consectet.</p>
    //           </div>
    //       </div>
    // </div>