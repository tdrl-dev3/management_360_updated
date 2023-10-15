import React from "react";

const TaxCalculation = () => {
  return (
    <div className=" bg-even-color py-20">
      <div className="container">
        <div className="flex flex-col gap-y-14 lg:gap-y-0 lg:flex-row-reverse lg:justify-between ">
          <div className="w-full flex flex-col justify-center lg:w-1/2 px-0 lg:px-4">
            <h1 className="text-5xl font-poppins mb-16">
              Integrated Tax &amp; VAT
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-400 font-poppins">
              Management 360 lets you deduct tax and vat from bill payments with
              just one click of a button. You can also calculate &amp; deduct
              tax from salaries. All you need to do is assign applicable Tax
              Deduction Section &amp; VAT Deduction Rule to a contact, and the
              system will automatically calculate the Tax &amp; VAT amount. You
              can easily generate Treasury Challans, Returns and Certificates
              for individual or multiple contacts with just the click of a
              button.
            </p>
          </div>
          <div className="lg:w-1/2 px-0 lg:px-4">
            <video
              className="mx-auto"
              width="900"
              height="400"
              autoPlay
              muted
              loop
            >
              <source
                src="https://elasticbeanstalk-ap-southeast-1-677312808939.s3.ap-southeast-1.amazonaws.com/uploads/management_360_website/tax_vat.mp4"
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculation;
