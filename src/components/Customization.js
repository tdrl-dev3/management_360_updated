import React from "react";

const BulkImport = () => {
  return (
    <div className=" bg-even-color py-20">
      <div className="container">
        <div className="flex flex-col gap-y-14 lg:gap-y-0 lg:flex-row lg:justify-between ">
          <div className=" w-full lg:w-1/2 px-0 lg:px-4 flex flex-col justify-center">
            <h1 className=" text-3xl font-poppins lg:text-5xl mb-5 lg:mb-10">
              Customizable &amp; Scalable
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-400 font-poppins">
              {/* In modern world, options are unlimited and you might be using different applications to track your accounts and finances. As a result, when you need a holistic view  */}
              As business grows and operation gets complicated, out of the box
              solutions may not be enough. Management 360 is designed in such a
              manner that it can be customized according to you business needs
              and the application is also scalable to support your business
              growth and increased volume of transactions.
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
                src="https://elasticbeanstalk-ap-southeast-1-677312808939.s3.ap-southeast-1.amazonaws.com/uploads/management_360_website/customization.mp4"
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
