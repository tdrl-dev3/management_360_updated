import React from "react";
import Image from "next/image";
import Dashboard from "../../public/images/Dashboard.png";
import Link from "next/link";

const HeroArea = ({ goToDemo }) => {
  return (
    <div className="bg-odd-color pt-40 pb-20">
      <div className="container">
        <div className="flex justify-between ">
          <div className="w-full lg:w-2/5 px-4 flex flex-col justify-center">
            <span className=" text-xl text-violet-900 lg:text-2xl inline-block font-normal">
              With Management 360
            </span>
            <h1 className="text-4xl font-poppins lg:text-5xl pt-5 pb-6 lg:pb-12">
              <span className="underline font-semibold">Track</span> all your
              business{" "}
              <span className="underline font-semibold">transactions</span> and
              ensure TAX and VAT{" "}
              <span className="underline font-semibold">Compliance</span>.
            </h1>
            <div className="flex justify-start ml-3">
              <Link
                href={`https://erp.thedotred.com/Managamenet_360_Accounting_System.pdf`}
              >
                <p className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Brochure
                </p>
              </Link>
              <button
                onClick={() => goToDemo()}
                className="text-white bg-violet-900 hover:bg-[#7E3AF2]/90 focus:ring-4 focus:outline-none focus:ring-[#7E3AF2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#7E3AF2]/50 mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Request a demo
              </button>
            </div>
          </div>
          <div className="hidden drop-shadow-md lg:block lg:w-3/5 px-4">
            <Image
              src={Dashboard}
              className="rounded-xl"
              width={900}
              height={600}
              objectFit="contain"
              alt="Application Dashboard Screentshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
