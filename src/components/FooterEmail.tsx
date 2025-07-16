import React from "react";
import Button from "./Button";

const FooterEmail = () => {
  return (
    <div
      className="relative w-full p-12 sm:p-20 bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/Images/EmailFooter.png')" }}
    >
      <div className="flex flex-col items-center gap-6 text-white text-center max-w-4xl w-full">
        <p className="text-lg sm:text-2xl font-semibold">
          Join Now with your Email Address and Choose your plan to get Started.
        </p>

        <div className="grid grid-cols-3 gap-2 w-full max-w-xl">
          <input
            type="email"
            placeholder="Email Address"
            className="col-span-2 px-4 py-2 bg-transparent placeholder-white text-white border border-primary-300 rounded-md outline-none"
          />
          <Button title="Join Now" hasIcon={false} />
        </div>
      </div>
    </div>
  );
};

export default FooterEmail;
