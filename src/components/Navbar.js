import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/Black-Resized.png";
// import {
//   Link
// } from "react-scroll";

const Navbar = ({ goToDemo }) => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    // optionally set a trigger element (eg. a button, hamburger icon)
    const triggerEl = document.getElementById("hamburger-btn");

    triggerEl.addEventListener("click", showNavItems);
  }, []);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const showNavItems = () => {
    console.log("Clicked me");
    // set the target element that will be collapsed or expanded (eg. navbar menu)
    const targetEl = document.getElementById("mobile-menu");
    targetEl.classList.toggle("hidden");
  };

  return (
    <div
      className={`z-20 fixed ${
        navbar ? ` bg-white drop-shadow-md transition duration-300` : `bg-white`
      } top-0 left-0 w-full py-3`}
    >
      <div className="">
        <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="https://thedotred.com/" className="w-[55px] h-[55px]">
              <Image
                src={logo}
                width={70}
                height={70}
                className="mr-3"
                alt="Dot Red Logo"
              />
            </a>
            <button
              id="hamburger-btn"
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium font-poppins font-medium">
                <li className="px-5 py-2.5 relative">
                  <Link href="https://thedotred.com">
                    <p className=" flex items-center"> About Company</p>
                  </Link>
                </li>
                <li className="text-white bg-violet-900 hover:bg-[#7E3AF2]/90 focus:ring-4 focus:outline-none focus:ring-[#7E3AF2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#7E3AF2]/50 mr-2 mb-2 drop-shadow-lg translate-y-0 hover:translate-y-1 cursor-pointer transition duration-300">
                  <button onClick={() => goToDemo()}>Request a demo</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
