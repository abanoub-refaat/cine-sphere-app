"use client";
import React, { useState } from "react";
import Button from "./Button";

interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
}

function PlanCard({ title, price, features }: PlanCardProps) {
  return (
    <div className="border border-primary-500 p-6 rounded-lg text-white">
      <h2 className="text-xl font-bold mb-2 text-primary-500 text-center">{title}</h2>
<p className="mb-4 text-center">
  <span className="text-3xl font-bold">{price}</span>
  <span className="text-sm text-white"> /month</span>
  <div className="flex justify-center mt-2">
  <hr className="my-2 border-t border-primary-600 w-36" />
  </div>
</p>
     <ul className="text-xs text-white mb-4 space-y-2">
  {features.map((feature, index) => (
    <li key={index} className="flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-purple-700 text-black flex items-center justify-center text-xs font-bold">
        ✓
      </div>
      {feature}
    </li>
  ))}
</ul>
      <Button title="Get Started" hasIcon={false}/>
    </div>
  );
}

function ChooseYourPlan() {
  const [isMonthlyClicked, setIsMonthlyClicked] = React.useState(true);
  const [isYearlyClicked, setIsYearlyClicked] = React.useState(false);
  const handleClick = () => {
    setIsMonthlyClicked(!isMonthlyClicked);
    setIsYearlyClicked(!isYearlyClicked);
  }
  return (
    <div className="flex flex-col items-center p-8 bg-black text-white py-28">
      <h1 className="text-3xl font-bold mb-2">Choose Your Plan</h1>
      <p className="text-m text-white mb-6">
        Choose your plan to enjoy unlimited access to your Favourite Movies and Shows
      </p>

      <div className="inline-flex border border-primary-700 rounded-full mb-10 overflow-hidden">
        <button onClick={handleClick} className={`px-8 py-4 text-sm font-medium ${isMonthlyClicked? "bg-primary-700": "" }  text-white transition`}>
          Monthly
        </button>
        <button onClick={handleClick} className={`px-8 py-4 text-sm font-medium ${isYearlyClicked? "bg-primary-700": "" }  text-white transition`}>
          Yearly
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <PlanCard
          title="Basic"
          price="$10.99"
          features={[
            "Access to SD (Standard Definition) streaming quality",
            "Watch on 1 device at a time",
            "Limited ads",
            "Offline downloads for up to 5 titles",
          ]}
        />
        <PlanCard
          title="Standard"
          price="$16.99"
          features={[
            "Access to Full HD (High Definition) streaming quality",
            "Watch on 2 devices simultaneously",
            "Ad-free experience",
            "Unlimited offline downloads",
          ]}
        />
        <PlanCard
          title="Premium"
          price="$25.99"
          features={[
            "Access to UHD and 4K streaming quality",
            "Watch on 4 devices simultaneously",
            "Full library access",
            "Includes all Standard Subscription features",
          ]}
        />
      </div>
    </div>
  );
}

export default ChooseYourPlan;