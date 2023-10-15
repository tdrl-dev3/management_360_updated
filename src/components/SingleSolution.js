import React from "react";

const SingleSolution = () => {
  return (
    <div className="bg-even-color py-20">
      <div className="container">
        <div className="flex flex-col">
          <div className=" w-full text-center hero-heading">
            <h1 className="text-4xl font-poppins lg:text-5xl">
              Single solution
            </h1>
            <span className="text-xl lg:text-2xl inline-block pt-5 pb-6 lg:pb-12">
              A fully integrate solution for accounting & finance
            </span>
            <p className=" text-gray-600">
              A single solution connecting your Accounts, Tax and VAT teams.
              View your transactions, financial position and performance in a
              single Dashboard and ensure that you are complying with the rules
              and regulations relating to your Tax and VAT.
            </p>
          </div>
          <div className="w-full my-5">
            <video
              className="mx-auto"
              width="900"
              height="400"
              autoPlay
              muted
              loop
            >
              <source
                src="https://elasticbeanstalk-ap-southeast-1-677312808939.s3.ap-southeast-1.amazonaws.com/uploads/management_360_website/single_solution.mp4"
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSolution;
