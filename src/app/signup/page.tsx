import React from "react";

function Signup() {
  return (
    <div className="flex flex-col text-white py-32 gap-5 px-14 md:flex-row md:py-28 bg-[url(/Images/log-bg.png)] md:px-24">
      <div className="justify-center items-center flex flex-col">
        <h2 className="text-2xl font-bold">
          Consider Joining Us on our journey
        </h2>
        <p className="text-xl">Hello, world</p>
      </div>
      <form action="submit" className="p-20 rounded-xl bg-glass">
        <div className="form-section">
          <label htmlFor=""></label>
        </div>
      </form>
    </div>
  );
}

export default Signup;
