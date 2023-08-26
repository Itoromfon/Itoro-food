import React from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
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

const Header = () => {
    return ( 
            <nav>
                <ul className="
                        flex 
                        justify-between 
                        md:p-5 
                        p-10
                        pb-5
                    "
                    >
                    <li>
                        <Link href="#">Dashboard</Link>
                    </li>
                    <li className="ml-auto">
                        <Link 
                            href="/"
                            className="
                                md:flex
                                hidden
                            "
                        >
                            Welcome back, Itoro
                        </Link>
                    </li>
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
                </ul>
            </nav>
     );
}
 
export default Header;
