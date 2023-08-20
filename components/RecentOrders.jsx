import React from 'react'
import {data} from "../data/data";
import {FaShoppingBag} from "react-icons/fa"

const RecentOrders = () => {
  /* we are mapping through the exact amount of object
     we have inside of our data.
  */
  return (
    <div className='
        w-full
        col-span-1
        relative
        lg:h-[70vh]
        h-[50vh]
        m-auto
        p-4
        border
        rounded-lg
        bg-white
        overflow-scroll
      '
    >
      <h1>Recent Orders</h1>
      <ul>
        {data.map((item, id) => {
          return (
            <li 
              key={id}
              className='
                bg-gray-50
                hover:bg-gray-100
                rounded-lg
                my-3
                p-2
                flex
                items-center
                cursor-pointer
              '
            >
              <div 
                className='
                  bg-purple-100
                  p-3
                  rounded-lg
                '
              >
                <FaShoppingBag 
                  className='
                    text-purple-800
                  ' 
                />
              </div>
              <div className='pl-4'>
                <p className='text-gray-800 font-bold'>${item.total}</p>
                <p className='text-gray-400 text-sm'>{item.name.first}</p>
              </div>
              <p className='lg:flex md:hidden absolute right-6 text-sm'>
                {item.date}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RecentOrders

// for it to flow we would use overflow scroll