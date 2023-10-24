import React from 'react'
import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import logo from '../assets/logo.png'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(true);
    
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
    
    
    
    return (
      <div className='fixed top-0 w-full shadow-md z-[20]'>
        <nav className="bg-white border-gray-200 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="" className="flex items-center">
              <img src={logo} className="h-12 mr-3 scale-150" alt="" />
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                className="text-white bg-black hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                Contact Us
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="navbar-sticky"
                aria-expanded={isOpen ? "true" : "false"}
                onClick={handleClick}
              >
                <div className="inline-flex p-0 ml-auto text-xl rounded-full outline-none hover:shadow-sm hover:bg-gray-100 ">
                  <HamburgerMenu
                    isOpen={!isOpen}
                    width={20}
                    height={15}
                    strokeWidth={2}
                    rotate={0}
                    color="black"
                    animationDuration={1}
                    className="m-3"
                  />
                </div>
              </button>
            </div>
            <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'hidden' : ''}`} id="navbar-cta">
            <ul className={`flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  `}>
                <li>
                  <a
                    href="#home"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 "
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutUs"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 "
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 "
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#photoslider"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 "
                  >
                    Resource
                  </a>
                </li>
                <li>
                  <a
                    href="#testimoni"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 "
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
    
    }
