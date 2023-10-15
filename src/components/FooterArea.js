import React from "react";
// import logo from "../public/images/Black-Resized.png";
import ScrollToTop from "react-scroll-to-top";

const FooterArea = () => {
  return (
    <div className=" bg-odd-color py-16">
      <ScrollToTop
        width="35px"
        height="35px"
        color="#6e7c8b"
        className=" fixed right-10 bottom-10"
        smooth
        top={400}
        svgPath="M246.738,0C110.69,0,0.01,110.692,0.01,246.732c0,136.064,110.68,246.74,246.728,246.74s246.724-110.676,246.724-246.74
			C493.462,110.692,382.786,0,246.738,0z M361.094,296.68l-8.964,8.972c-2.02,2.012-5.564,2.012-7.576,0l-94.932-94.924
			c-0.752-0.756-1.736-1.132-2.72-1.132s-1.976,0.376-2.732,1.132l-94.784,94.768c-2.004,1.996-5.548,1.996-7.56,0l-8.972-8.972
			c-2.08-2.076-2.08-5.48,0-7.552l110.16-110.156c0.996-0.984,2.332-1.532,3.996-1.532c1.436,0,2.78,0.548,3.764,1.532
			L361.09,289.128C363.174,291.212,363.174,294.604,361.094,296.68z"
        viewBox="0 0 493.472 493.472"
      />
      <div className="container text-white">
        {/* <div className="flex text-gray-900 font-poppins">
          <div className="w-1/4">
            <div className="w-[16vw] text-center">
              <Image src={logo} width="100px" height="100px" />
            </div>
            <span className="block text-xs lg:text-lg">
              The Dot Red Limited
            </span>
          </div>
          <div className="flex w-3/4">
            <div className="w-1/3 px-4">
              <span className=" text-sm lg:text-lg font-semibold mb-3 inline-block">
                Products
              </span>
              <ul className="footer-list">
                <li className=" mb-4 text-gray-500 text-sm cursor-pointer">
                  <a href="#">Management 360</a>
                </li>
                <li className=" mb-4 text-gray-500 text-sm cursor-pointer">
                  <a href="#">Compliance 360</a>
                </li>
                <li className=" mb-4 text-gray-500 text-sm cursor-pointer">
                  <a href="#">E-commerce 360</a>
                </li>
                <li className=" mb-4 text-gray-500 text-sm cursor-pointer">
                  <a href="#">Payroll 360</a>
                </li>
              </ul>
            </div>
            <div className="w-1/3 px-4">
              <span className=" text-sm lg:text-lg font-semibold mb-3 inline-block">
                Use Cases
              </span>
              <ul className="footer-list">
                <li className=" mb-4 text-gray-500 text-sm cursor-pointer">
                  <a href="#">E-commerce</a>
                </li>
                <li className=" mb-4 text-gray-500 text-sm cursor-pointer">
                  <a href="#">FMGC</a>
                </li>
                <li className=" mb-4 text-gray-500 text-sm cursor-pointer">
                  <a href="#">Pharmaceutical</a>
                </li>
              </ul>
            </div>
            <div className="w-1/3 px-4">
              <span className=" text-sm lg:text-lg font-semibold mb-3 inline-block">
                Company
              </span>
              <ul className="footer-list">
                <li className=" mb-4 text-gray-500 text-sm cursor-pointer">
                  <a href="#">Customers</a>
                </li>
                <li className=" mb-4 text-gray-500 text-sm cursor-pointer">
                  <a href="#">Jobs</a>
                </li>
                <li className=" mb-4 text-gray-500 text-sm cursor-pointer">
                  <a href="#">Enterprise</a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2022{" "}
            <a href="https://thedotred.com" className="hover:underline">
              The Dot Red Limited™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://thedotred.com"
              className="text-gray-500 hover:text-gray-900 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/thedotred"
              className="text-gray-500 hover:text-gray-900 "
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/thedotred"
              className="text-gray-500 hover:text-gray-900 "
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.github.com/thedotred"
              className="text-gray-500 hover:text-gray-900 "
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterArea;
