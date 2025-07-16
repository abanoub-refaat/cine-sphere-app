/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full justify-between items-center flex-row sticky top-0 z-50 bg-primary-950 bg-opacity-50 py-10 px-24 h-12">
      <div className="cursor-pointer">
        <img
          src={"icons/nav-logo.svg"}
          alt="cine sphere logo"
          style={{ width: 187, height: 30 }}
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
          <img
            src={"icons/search.svg"}
            style={{ width: 20, height: 20 }}
            alt="search"
          />
        </div>
        <Button title="Join Now" hasIcon={false} />
      </div>
    </nav>
  );
};

export default Navbar;
