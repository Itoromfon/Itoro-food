import React from 'react';
/* we would import some react icons */
import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs';
import {data} from '../data/data';

const customers = () => {
  return (
      <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
            <h2>Customers</h2>
            <h2>Welcome Back, Itoro</h2>
        </div>
        <div className='p-4'>
            <div 
                className='
                        w-full
                        m-auto 
                        p-4 
                        border
                        rounded-lg
                        bg-white
                        overflow-y-auto
                    '
                >
                    <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <span>Name</span>
                        <span className='sm:text-left text-right'>Email</span>
                        <span className='hidden md:grid'>Last Order</span>
                        <span className='hidden md:grid'>Method</span>
                    </div>
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
                                        grid
                                        md:grid-cols-4
                                        sm:grid-cols-3
                                        grid-cols-2
                                        items-center
                                        justify-between
                                        cursor-pointer
                                    '
                                >
                                    <div className='flex items-center'>
                                        <div className='bg-purple-100 p-3 rounded-lg'>
                                            <BsPersonFill className='text-purple-800' />
                                        </div>
                                        <p className='pl-4'>{item.name.first + ' ' + item.name.last}</p>
                                    </div>
                                    <p className='text-gray-600 sm:text-left text-right'>{item.name.first}@gmail.com</p>
                                    <p className='hidden md:flex'>{item.date}</p>
                                    <div className='sm:flex hidden justify-between items-center'>
                                        <p>{item.method}</p>
                                        <BsThreeDotsVertical />  
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default customers