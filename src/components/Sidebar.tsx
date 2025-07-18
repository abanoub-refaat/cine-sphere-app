"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Image from "next/image";
function Sidebar() {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handelClick = () => setIsClicked(!isClicked);
  return (
    <nav className="side-bar flex z-10 bg-black w-full justify-between items-center py-10 px-12 h-12">
      <div className="cursor-pointer">
        <Image
          src={"/icons/nav-logo.svg"}
          alt="cine sphere logo"
          height={30}
          width={187}
          onClick={() => router.push("/")}
        />
      </div>
      <div className="cursor-pointer" onClick={handelClick}>
        <Image
          src="/icons/hamburger-menu.svg"
          height={30}
          width={30}
          alt="menu"
        />
      </div>
      <div
        className={`fixed z-30 h-full w-full bg-black transition-all duration-300 ease-in-out p-5 ${
          isClicked
            ? "right-0 translate-x-0 top-0 flex flex-col gap-12 items-center"
            : "right-0 translate-x-full top-0"
        }`}
      >
        <div className="flex items-center justify-between mt-4">
          <Image
            src={"/icons/nav-logo.svg"}
            alt="cine sphere logo"
            className="mr-60"
            height={30}
            width={187}
            style={{ height: 30 }}
            onClick={() => router.push("/")}
          />
          <Image
            src={"/icons/x-mark.svg"}
            height={30}
            width={30}
            style={{ width: 20, height: 20 }}
            alt="search"
            className="cursor-pointer"
            onClick={handelClick}
          />
        </div>
        <div className="flex flex-col text-white text-sm gap-5 items-center py-5 w-full overflow-auto text-center">
          <Link
            href={""}
            className="hover:text-primary-700 bg-primary-500 p-5 w-full"
          >
            Upcomming
          </Link>
          <Link
            href={""}
            className="hover:text-primary-700 bg-primary-400  p-5 w-full"
          >
            Shows
          </Link>
          <Link
            href={""}
            className="hover:text-primary-700 bg-primary-500  p-5 w-full"
          >
            Fanarts
          </Link>
          <Link
            href={""}
            className="hover:text-primary-700 bg-primary-400  p-5 w-full"
          >
            Plans
          </Link>
          <Link
            href={""}
            title="Community"
            className="hover:text-primary-700 bg-primary-500  p-5 w-full"
          >
            Community
          </Link>
          <Link href={""} className="hover:text-primary-700  p-5 w-full">
            Account
          </Link>
        </div>
        <div className="flex gap-28 items-center justify-center px-2">
          <Button title="Join Now" hasIcon={false} />
          <div className="cursor-pointer">
            <Image
              src={"/icons/search.svg"}
              height={20}
              width={20}
              style={{ width: 20, height: 20 }}
              alt="search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
