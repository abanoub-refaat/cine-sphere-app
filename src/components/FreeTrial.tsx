import react from "react";
import Button from "./Button";
const FreeTrial = () => {
  return (
    <div className="flex bg-[url(/Images/FreeTrial.png)] bg-cover p-20 w-full gap-2 justify-center">
      <div className="flex gap-20">
        <div className="flex flex-col">
          <h3 className="text-4xl text-white font-bold">
            Start your free trial today!
          </h3>
          <p className="text-lg text-white mt-2">
            Join Now with your Email Address and Choose your plan to get Started.
          </p>
        </div>
        <div className="flex items-center ml-4">
          <Button title="Free Trial" hasIcon={false} />
        </div>
      </div>
    </div>
  );
};
export default FreeTrial;
