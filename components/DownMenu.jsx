import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { RxPerson } from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FaBlog } from "react-icons/fa"
import { SiPowerpages } from "react-icons/si"
import { Dropdown } from 'antd'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiFillPhone } from "react-icons/ai";


function DownMenu() {
    const items = [
        {
            label: <a
                className="
                        pr-10
                        flex
                    "
                href="#"
            >
                <RxDashboard
                    size={15}
                    className="
                        mt-1
                        mr-2
                    "

                />
                Home
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
                href="#"
            >
                <RxPerson
                    size={15}
                    className="
                            mt-1
                            mr-2
                        "

                />
                About
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
                href="#"
            >
                <HiOutlineShoppingBag
                    size={15}
                    className="
                                mt-1
                                mr-2
                            "

                />
                Menu
            </a>,
            key: '3'
        },
        {
            label: <a
                className="
                        pr-10
                        flex
                    "
                href="#"
            >
                <SiPowerpages
                    size={15}
                    className="
                                mt-1
                                mr-2
                            "

                />
                Pages
            </a>,
            key: '3'
        },
        {
            label: <a
                className="
                        pr-10
                        flex
                    "
                href="#"
            >
                <FaBlog
                    size={15}
                    className="
                                mt-1
                                mr-2
                            "

                />
                Blog
            </a>,
            key: '3'
        },
        {
            label: <a
                className="
                        pr-10
                        flex
                    "
                href="#"
            >
                <AiFillPhone
                    size={15}
                    className="
                                mt-1
                                mr-2
                            "

                />
                Contact
            </a>,
            key: '3'
        },
    ]

  return (
    <div>
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
                                xl:hidden
                            "
                      size={22}
                  />
              </a>
          </Dropdown>
    </div>
  )
}

export default DownMenu