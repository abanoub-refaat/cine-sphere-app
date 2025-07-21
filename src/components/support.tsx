/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Input from "./Input";
import Button from "./Button";
import PhoneInputField from "./PhoneInputField";

function Support() {
  return (
    <div className="flex flex-wrap flex-row justify-between p-8 bg-black text-white py-28">
      <div className="basis-[20%]">
        <h1 className="text-3xl font-bold mb-4">
          We are here for you
          <br />
          whenever you need!
        </h1>
        <p className="text-sm text-primary-300 mb-6">
          We&apos;re here to help you with any problems you may be have while
          using Cine Sphere.
        </p>
        <img
          src="/images/support.png"
          alt="Support"
          className="flex flex-wrap max-w-sm"
        />
      </div>

      <div className="basis-full md:basis-[65%] bg-black border border-primary-600 rounded-xl p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input label="First Name" placeholder="Enter First Name" />
          </div>
          <div className="flex-1">
            <Input label="Last Name" placeholder="Enter Last Name" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input label="Email" placeholder="Enter your Email" />
          </div>
          <div className="flex-1">
            <label className="text-sm text-white mb-1 block font-semibold">
              Phone Number
            </label>

            <PhoneInputField
              id="phone"
              name="phone"
              label=""
              required={true}
              onChange={(e) => console.log(e.target.value)}
              onBlur={() => {}}
              value=""
              placeholder="+1 (555) 000-0000"
              defaultCountry="us"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-semibold text-white mb-1 block">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Enter your query"
            className="w-full bg-transparent border border-primary-500 rounded-md p-2 text-sm text-white placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 border border-white cursor-pointer rounded-sm hover:bg-white hover:accent-white checked:bg-primary-600 transition "
            />
            <label htmlFor="terms" className="text-sm text-white">
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>
          <Button title="Submit" hasIcon={false} />
        </div>
      </div>
    </div>
  );
}

export default Support;
