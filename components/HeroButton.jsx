import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs"

function HeroButton() {
  return (
    <div>
      <button 
        className='
          text-[#bf9444]
          border
          border-[#bf9444]
          px-10
          py-3
          mb-16
          rounded-full
          cursor-pointer
          hover:bg-[#bf9444]
          hover:text-white
          font-bold
          text-lg
          flex
      '
      >
        <BsArrowUpRightCircle 
          className='
            mt-1
            mr-2
          '
        />
        Discover More
      </button>
    </div>
  )
}

export default HeroButton


//   < Button
// width = { 200}
// height = { 100}
// className = '
// rounded - full
// md: text - lg
// text - md
// text - amber - 400
// border - amber - 400
// md: px - 10
// md: py - 4
// md: pb - 10
// px - 8
// py - 3
// pb - 8
// flex
// '
//   >
//   <BsArrowUpRightCircle
//     className='
//                       mr-3
//                       mt-1
//                     '
//   />
//           Discover More
//       </ >