import React from "react";
import Button from "./Button";

const FreeTrial = () => {
  return (
    <div className="flex bg-[url(/Images/FreeTrial.png)] bg-cover bg-center items-center px-4 py-12 sm:py-16 md:py-20 justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-20 max-w-6xl w-full">
        <div className="text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">
            Start your free trial today!
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-white mt-2 max-w-xl">
            Join Now with your Email Address and Choose your plan to get
            Started.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button title="Free Trial" hasIcon={false} />
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
