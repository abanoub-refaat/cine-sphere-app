"use client";
import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="nav-bar flex w-full text-md fixed justify-between items-center flex-row z-20 bg-primary-700 bg-opacity-0 py-10 px-24 h-12">
      <div className="cursor-pointer">
        <Image
          src={"icons/nav-logo.svg"}
          alt="cine sphere logo"
          width={150}
          height={30}
          onClick={() => router.push("/")}
        />
      </div>
      <div className="hidden sm:flex text-white gap-16 text-sm justify-center items-center">
        <Link href={""} className="hover:text-primary-700">
          Upcomming
        </Link>
        <Link href={""} className="hover:text-primary-700">
          Shows
        </Link>
        <Link href={""} className="hover:text-primary-700">
          Fanarts
        </Link>
        <Link href={""} className="hover:text-primary-700">
          Plans
        </Link>
        <Link href={""} title="Community" className="hover:text-primary-700">
          Community
        </Link>
        <Link href={""} className="hover:text-primary-700">
          Account
        </Link>
      </div>
      <div className="flex gap-7 items-center">
        <div className="cursor-pointer">
          <Image src={"icons/search.svg"} width={20} height={20} alt="search" />
        </div>
        <Button
          title="Join Now"
          hasIcon={false}
          onClick={() => router.push("/signup")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
