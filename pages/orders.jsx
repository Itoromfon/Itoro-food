import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { data } from '../data/data';
import { Dropdown } from "antd";

const items = [
    {
        label: <a
            className="
                        pr-10
                        flex
                    "
            href="/"
        >
            <RxDashboard
                size={15}
                className="
                        mt-1
                        mr-2
                    "
            />
            Dashboard Home
        </a>,
        key: '0'
    },
    {
        type: 'divider',
    },
    {
        label: <a
            className="
                        pr-10
                        flex
                    "
            href="/customers"
        >
            <RxPerson
                size={15}
                className="
                            mt-1
                            mr-2
                        "
            />
            Customers
        </a>,
        key: '1'
    },
    {
        type: 'divider',
    },
    {
        label: <a
            className="
                        pr-10
                        flex
                    "
            href="/orders"
        >
            <HiOutlineShoppingBag
                size={15}
                className="
                                mt-1
                                mr-2
                            "
            />
            Orders
        </a>,
        key: '3'
    },
]

const orders = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
            <div
                className='
                    flex 
                    justify-between 
                    md:p-5
                    p-10
                    pb-5
                '
            >
            <h2>Orders</h2>
            <h2 className='ml-auto md:flex hidden'>
                Welcome Back, Itoro
            </h2>
            <Dropdown
                className="
                    cursor-pointer
                "
                menu={{
                    items,
                }}
                trigger={['click']}
            >
                <a onClick={(e) => e.preventDefault()}>

                    <AiOutlineMenu
                        className="
                                text-md
                                text-black
                                md:hidden
                                md:
                            "
                        size={22}
                    />
                </a>
            </Dropdown>
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
                <div className='
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
                    <span>Order</span>
                    <span className='sm:text-left text-right'>Status</span>
                    <span className='hidden md:grid'>Last Order</span>
                    <span className='hidden sm:grid'>Method</span>
                </div>
                <ul>
                    {data.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className='
                                    bg-gray-50
                                    hover:bg-gray-100
                                    rounded-lg
                                    my-3
                                    mx-3
                                    p-3
                                    grid
                                    md:grid-cols-4
                                    sm:grid-cols-3
                                    grid-cols-2
                                    items-center
                                    justify-between
                                    cursor-pointer
                                '
                            >
                                <div className='flex'>
                                    <div 
                                        className='
                                            bg-purple-100
                                            p-3
                                            rounded-lg

                                        '
                                    >
                                        <FaShoppingBag className='text-purple-800' />
                                    </div>
                                    <div className='pl-4'>
                                        <p className='text-gray-800 font-bold'>${item.total.toLocaleString()}</p>
                                        <p className='text-gray-800 text-sm'>{item.name.first}</p>
                                    </div>
                                </div>
                                <p className='text-gray-600 sm:text-left text-right'>
                                    <span 
                                        className={
                                            item.status === 'Processing' 
                                            ? 'bg-green-200 p-2 rounded-lg' 
                                            : item.status === 'Completed' 
                                            ? 'bg-blue-200 p-2 rounded-lg' 
                                            : 'bg-yellow-200 p-2 rounded-lg' 
                                            }
                                    >
                                        {item.status}
                                    </span>
                                </p>
                                <p className='hidden md:flex'>{item.date}</p>
                                <div className='sm:flex hidden items-center justify-between'>
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

export default orders