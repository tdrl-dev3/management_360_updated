import React from "react";

const BulkImport = () => {
  return (
    <div className=" bg-even-color py-20">
      <div className="container">
        <div className="flex flex-col gap-y-14 lg:gap-y-0 lg:flex-row lg:justify-between ">
          <div className=" w-full flex flex-col justify-center lg:w-1/2 px-0 lg:px-4">
            <h1 className=" text-3xl font-poppins lg:text-5xl mb-5 lg:mb-10">
              Excel/Bulk Import
            </h1>

            <p className=" text-base text-gray-500 dark:text-gray-400 font-poppins">
              We understand accountants love Microsoft Excel. That is why they
              always keep information and calculations in Excel. To get the best
              out of Excel, Management 360 allows importing Master Data directly
              from Excel file in just few clicks. If you need to import other
              data into the system, Management 360 can be customized to
              facilitate the needs and make the process more efficient.
            </p>
          </div>
          <div className=" lg:w-1/2 px-0 lg:px-4">
            <video
              className="mx-auto"
              width="900"
              height="400"
              autoPlay
              muted
              loop
            >
              <source
                src="https://elasticbeanstalk-ap-southeast-1-677312808939.s3.ap-southeast-1.amazonaws.com/uploads/management_360_website/Bulk.mp4"
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkImport;
