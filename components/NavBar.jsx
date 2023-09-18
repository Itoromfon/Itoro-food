import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from "react-icons/ai"
import { IoMdArrowDropdown } from "react-icons/io"
import { Dropdown, Space } from 'antd';
import DownMenu from './DownMenu';

const items = [
    {
        label: (
            <Link 
                className='
                    pl-5
                    mr-40
                    items-start
                '
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://www.antgroup.com"
            >
                Home One
            </Link>
        ),
        key: '0',
    },
    {
        label: (
            <Link 
                className='
                    pl-5
                    mr-40
                    items-start
                '
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://www.aliyun.com"
            >
                Home Two
            </Link>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <Link 
                className='
                    pl-5
                    mr-40
                    items-start
                '
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://www.aliyun.com"
            >
                Home Three
            </Link>
        ),
        key: '1',
    },
];

function NavBar() {
  return (
    <div className='md:flex'>
        <nav 
            className='
                py-5
                px-10
        '
        >
        <div 
            className='
            bg-white  
            rounded-full
            px-10
            py-5
            flex
            justify-between
            items-center
            '
            >
            <Link href="#">
                <Image
                    src="https://restho-nextjs.vercel.app/assets/images/header2-logo.svg"
                    width={170}
                    height={170}
                />
            </Link>
            <ul className='hidden md:ml-28 md:flex'>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <Link
                            onClick={(e) => e.preventDefault()}
                            href="#"
                            className='
                                text-lg
                                text-gray-700
                                flex
                                hover:text-[#bf9444]
                            '
                        >
                            <Space>
                                Home
                                <IoMdArrowDropdown
                                    className='
                                        text-sm
                                        w-10
                                        h-5
                                        -ml-3
                                        mt-2
                                        text-gray-700
                                        hover:text-gray-600
                            '
                                />
                            </Space>
                        </Link>
                    </Dropdown>
                    <Link
                        href="#"
                        className='
                            text-lg
                            ml-7
                            text-gray-700
                            flex
                            hover:text-[#bf9444]
                        '
                    >
                        About
                          <IoMdArrowDropdown
                              className='
                                    text-sm
                                    w-10
                                    h-5
                                    -ml-3
                                    mt-2
                                    text-gray-700
                                    hover:text-gray-600
                            '
                          />
                    </Link>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <Link
                            onClick={(e) => e.preventDefault()}
                            href="#"
                            className='
                                text-lg
                                ml-7
                                text-gray-700
                                flex
                                hover:text-[#bf9444]
                            '
                        >
                            <Space>
                                Menu
                                <IoMdArrowDropdown
                                    className='
                                    text-sm
                                    w-10
                                    h-5
                                    -ml-3
                                    mt-2
                                    text-gray-700
                                    hover:text-gray-600
                        '
                                />
                            </Space>
                        </Link>
                    </Dropdown>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <Link
                            onClick={(e) => e.preventDefault()}
                            href="#"
                            className='
                                text-lg
                                ml-7
                                text-gray-700
                                flex
                                hover:text-[#bf9444]
                            '
                        >
                            <Space>
                                Pages
                                <IoMdArrowDropdown
                                    className='
                                    text-sm
                                    w-10
                                    h-5
                                    -ml-3
                                    mt-2
                                    text-gray-700
                                    hover:text-gray-600
                        '
                                />
                            </Space>
                        </Link>
                    </Dropdown>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <Link
                            onClick={(e) => e.preventDefault()}
                            href="#"
                            className='
                                text-lg
                                ml-7
                                text-gray-700
                                flex
                                hover:text-[#bf9444]
                            '
                        >
                            <Space>
                                Blog
                                <IoMdArrowDropdown
                                    className='
                                    text-sm
                                    w-10
                                    h-5
                                    -ml-3
                                    mt-2
                                    text-gray-700
                                    hover:text-gray-600
                        '
                                />
                            </Space>
                        </Link>
                    </Dropdown>
                    <Link 
                        href="#"
                        className='
                            text-lg
                            ml-7
                            text-gray-700
                            flex
                            hover:text-[#bf9444]
                        '
                    >
                        Contact
                        <IoMdArrowDropdown
                            className='
                                    text-sm
                                    w-10
                                    h-5
                                    -ml-3
                                    mt-2
                                    text-gray-700
                                    hover:text-gray-600
                        '
                        />
                    </Link>
            </ul>
            <button 
                className='
                bg-[#bf9444]
                hover:bg-black
                transition-colors
                duration-500
                ease-linear
                ml-2
                text-white
                px-10
                py-3
                rounded-full
                text-lg
                font-bold
                md:ml-4
                md:flex
                hidden
                cursor-pointer
            '>
                Find Reservation
            </button>
            <DownMenu />
            </div>
        </nav>
    </div>
  )
}

export default NavBar