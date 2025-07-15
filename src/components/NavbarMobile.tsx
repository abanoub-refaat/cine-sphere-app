/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
function NavbarMobile() {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handelClick = () => setIsClicked(!isClicked);
  return (
    <nav className="flex w-full justify-between items-center bg-primary-400 py-10 px-12 h-12">
      <div className="cursor-pointer">
        <img
          src={"icons/nav-logo.svg"}
          alt="cine sphere logo"
          style={{ height: 30 }}
          onClick={() => router.push("/")}
        />
      </div>
      <div className="cursor-pointer" onClick={handelClick}>
        <img src="icons/hamburger-menu.svg" alt="menu" />
      </div>
      <div
        className={
          isClicked
            ? "absolute transition-all duration-300"
            : "absolute transition-all duration-300 -top-full -right-full"
        }
      >
        <div className="flex gap-8 items-center">
          <img
            src={"icons/nav-logo.svg"}
            alt="cine sphere logo"
            style={{ height: 30 }}
            onClick={() => router.push("/")}
          />
          <img
            src={"icons/x-mark.svg"}
            style={{ width: 20, height: 20 }}
            alt="search"
            className="cursor-pointer"
            onClick={handelClick}
          />
        </div>
        <div className="flex flex-col text-white text-sm justify-center items-start gap-6 mr-16 h-dvh">
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
          <Button title="Join Now" hasIcon={false} />
        </div>
      </div>
    </nav>
  );
}

export default NavbarMobile;
