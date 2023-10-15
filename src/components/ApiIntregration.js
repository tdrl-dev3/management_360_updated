import React from "react";
import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `https://www.process.st/wp-content/themes/koombea/images${src}`;
};

const ApiIntregration = () => {
  return (
    <div className=" bg-odd-color py-20">
      <div className=" container">
        <div className="flex flex-col">
          <div className=" mb-8">
            <div className="w-full">
              <div className=" w-full text-center">
                <h2 className="text-[1.8rem] lg:text-5xl font-poppins">
                  How to start?
                </h2>
                <span className="text-xl lg:text-2xl inline-block pt-5 pb-6 lg:pb-12">
                  Easy to get started, just in 5 steps
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
              <div className="flex flex-col items-center p-5 cursor-pointer m-2 hover:border rounded-lg">
                <span className="mb-3 bg-violet-500 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <Image
                  loader={imageLoader}
                  height={100}
                  width={100}
                  className="mb-3 w-24 h-24"
                  src="/public-template-1.svg"
                  alt="Big user in a file"
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 text-center font-poppins">
                  Setup company profile
                </span>
              </div>
              <div className="flex flex-col items-center p-5 cursor-pointer m-2 hover:border rounded-lg">
                <span className="mb-3 bg-violet-500 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <Image
                  loader={imageLoader}
                  height={100}
                  width={100}
                  className="mb-3 w-24 h-24"
                  src="/step3.png"
                  alt="system user cards with progressbar"
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 text-center font-poppins">
                  Setup contacts
                </span>
              </div>
              <div className="flex flex-col items-center p-5 cursor-pointer m-2 hover:border rounded-lg">
                <span className="mb-3 bg-violet-500 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <Image
                  loader={imageLoader}
                  height={100}
                  width={100}
                  className="mb-3 w-24 h-24"
                  src="/public-template-3.svg"
                  alt="computer with chart of accounts"
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 text-center font-poppins">
                  Add bank &amp; chart of accounts
                </span>
              </div>
              <div className="flex flex-col items-center p-5 cursor-pointer m-2 hover:border rounded-lg">
                <span className="mb-3 bg-violet-500 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <Image
                  loader={imageLoader}
                  height={100}
                  width={100}
                  className="mb-3 w-24 h-24"
                  src="/public-template-9.svg"
                  alt="File folder for business transactions"
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 text-center font-poppins">
                  Configure tax and vat
                </span>
              </div>
              <div className="flex flex-col items-center p-5 cursor-pointer m-2 hover:border rounded-lg">
                <span className="mb-3 bg-violet-500 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <Image
                  loader={imageLoader}
                  height={100}
                  width={100}
                  className="mb-3 w-24 h-24"
                  src="/public-template-10.svg"
                  alt="File folder for business transactions"
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 text-center font-poppins">
                  Start recording transactions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiIntregration;
