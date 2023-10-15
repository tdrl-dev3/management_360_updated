import React from "react";
import Image from "next/image";
import maganagement1 from "../../public/images/2564.png";
import maganagement2 from "../../public/images/2565.png";
import maganagement3 from "../../public/images/2566.png";

//https://elasticbeanstalk-ap-southeast-1-677312808939.s3.ap-southeast-1.amazonaws.com/uploads/management_360_website/2564.png
//https://elasticbeanstalk-ap-southeast-1-677312808939.s3.ap-southeast-1.amazonaws.com/uploads/management_360_website/2565.png
//https://elasticbeanstalk-ap-southeast-1-677312808939.s3.ap-southeast-1.amazonaws.com/uploads/management_360_website/2566.png

const Management360 = () => {
  return (
    <div className=" bg-odd-color py-20">
      <div className=" container">
        <div className="flex flex-col">
          <div className=" mb-8 lg:mb-16">
            <div className="w-full">
              <div className=" w-full text-center">
                <h2 className="text-[1.8rem] lg:text-5xl font-poppins">
                  Why Management 360
                </h2>
                <div className=" mt-10">
                  <p className=" mb-5 text-gray-600">
                    We know how difficult it is to maintain multiple systems and
                    spreadsheets for accounting, taxation and vat. Things get
                    more complicated and time consuming when compliance is
                    complex. As organization grows, it also becomes difficult to
                    maintain processes and communicate effectively among
                    different users.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-center">
              <div className="flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src={maganagement2}
                    alt="excel or csv file import"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
                      Excel / Bulk Import
                    </h5>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src={maganagement1}
                    alt="integrated tax and vat laws"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
                      Integrated Tax &amp; VAT
                    </h5>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    src={maganagement3}
                    img="api integration and  customizable and scalable"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
                      Customizable &amp; Scalable
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management360;

{
  /* <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="">
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a> */
}
