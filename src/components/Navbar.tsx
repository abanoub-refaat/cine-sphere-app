"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full justify-between items-center flex-row bg-primary-400 py-8 px-24 h-12">
      <div className="cursor-pointer">
        <Image
          src={"nav-logo.svg"}
          alt="cine sphere logo"
          width={187}
          height={1}
          style={{ height: 30 }}
          onClick={() => router.push("/")}
        />
      </div>
      <div className="flex text-white gap-16 text-sm justify-center items-center">
        <a className="hover:text-primary-700 hover:font-bold" href="">
          Upcomings
        </a>
        <a href="">Shows</a>
        <a href="">Fanarts</a>
        <a href="">Plans</a>
        <a href="">Community</a>
        <a href="">Account</a>
      </div>
      <div className="flex gap-7 items-center">
        <div className="hover:animate-pulse cursor-pointer">
          <Image src={"search.svg"} width={20} height={20} alt="search" />
        </div>
        <Button title="Join Now" hasIcon={false} />
      </div>
    </nav>
  );
};

export default Navbar;
