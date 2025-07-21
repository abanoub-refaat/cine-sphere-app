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
          width={150}
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
        <div className="flex pt-8 items-center gap-24 justify-between">
          <Image
            src={"/icons/nav-logo.svg"}
            alt="cine sphere logo"
            height={30}
            width={150}
            onClick={() => router.push("/")}
          />
          <Image
            src={"/icons/x-mark.svg"}
            height={20}
            width={20}
            alt="search"
            className="cursor-pointer"
            onClick={handelClick}
          />
        </div>
        <div className="flex flex-col text-white text-sm gap-5 items-center py-5 w-full overflow-auto text-center">
          <Link
            href={"/upcomings"}
            className="text-white text-lg p-5 w-full"
            onClick={handelClick}
          >
            Upcomming
          </Link>
          <Link
            href={"/fanart"}
            className="text-white text-lg p-5 w-full"
            onClick={handelClick}
          >
            Fanarts
          </Link>
          <Link
            href={"/subscription"}
            className="text-white text-lg p-5 w-full"
            onClick={handelClick}
          >
            Plans
          </Link>
          <Link
            href={"/community"}
            title="Community"
            className="text-white text-lg p-5 w-full"
            onClick={handelClick}
          >
            Community
          </Link>
          <Link
            href={"/support"}
            className="text-white text-lg p-5 w-full"
            onClick={handelClick}
          >
            Support
          </Link>
        </div>
        <div className="flex items-center justify-center gap-9 px-2">
          <div className="cursor-pointer">
            <Image
              src={"/icons/search.svg"}
              height={20}
              width={20}
              alt="search"
            />
          </div>
          <Button
            title="Join Now"
            hasIcon={false}
            onClick={() => router.push("/signup")}
          />
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
