import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between flex-row">
      <div className="">
        <Image
          src={"nav-logo.svg"}
          alt="cine sphere logo"
          width={187}
          height={57}
        />
      </div>
      <div className="flex">
        <a href="">Upcomings</a>
        <a href="">Shows</a>
        <a href="">Fanarts</a>
        <a href="">Plans</a>
        <a href="">Community</a>
        <a href="">Account</a>
      </div>
      <div className="flex">
        <div className="search-bar">search</div>
        <div className="button">button</div>
      </div>
    </nav>
  );
};

export default Navbar;
