"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [background, setBackground] = useState(false);
  useEffect(() => {
    if (window && window.scrollY > 80) {
      setBackground(true);
    } else {
      setBackground(false);
    }
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`nav-bar flex w-full text-md fixed justify-between items-center flex-row z-20  py-10 px-24 h-12 ${
        background ? `bg-dark shadow-xl` : `bg-transparent`
      }`}
    >
      <div className="cursor-pointer">
        <Image
          src={"icons/nav-logo.svg"}
          alt="cine sphere logo"
          width={150}
          height={30}
          onClick={() => router.push("/")}
        />
      </div>
      <div className="hidden sm:flex text-white gap-6 text-md justify-center items-center">
        <Link href={"/upcomings"} className="hover:text-primary-700">
          Upcomming
        </Link>
        <Link href={"/fanart"} className="hover:text-primary-700">
          Fanarts
        </Link>
        <Link href={"/subscription"} className="hover:text-primary-700">
          Subscription
        </Link>
        <Link
          href={"/community"}
          title="Community"
          className="hover:text-primary-700"
        >
          Community
        </Link>
        <Link href={"/support"} className="hover:text-primary-700">
          Support
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
