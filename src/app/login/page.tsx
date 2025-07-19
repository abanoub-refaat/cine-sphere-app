"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TextInputLight from "@/components/TextInputLight";
import SocialLink from "@/components/SocialLink";

function Login() {
  const [username, setusername] = useState("");
  const [nameError, setNameError] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setusername(e.target.value);
    if (isNameTouched) {
      if (e.target.value.trim() === "") {
        setNameError("Username is required");
      } else {
        setNameError("");
      }
    }
  };

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (isPasswordTouched) {
      if (e.target.value.trim() === "") {
        setPasswordError("Password is required");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleClickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsNameTouched(true);
    if (username.trim() === "") {
      setNameError("Name is required");
    }
  };

  const handleBlur = (field: string) => {
    switch (field) {
      case "name":
        setIsNameTouched(true);
        if (username.trim() === "") {
          setNameError("Name is required");
        }
        break;
      case "password":
        setIsPasswordTouched(true);
        if (password.trim() === "") {
          setPasswordError("Password is required");
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-white py-32 gap-10 px-14 md:flex-row md:py-32 bg-[url(/Images/log-bg.png)] md:px-32">
      <div className="justify-center basis-1/2 items-center text-center  flex flex-col">
        <Image
          src={"/icons/nav-logo.svg"}
          width={250}
          height={200}
          alt="logo"
          className="mb-8"
        />
        <h2 className="text-md text-center md:text-6xl font-bold">
          The world’s Largest Movie Library
        </h2>
      </div>
      <div className="p-8 md:p-32 flex basis-1/2 flex-col justify-center items-center rounded-3xl backdrop-blur-md bg-glass">
        <div className="form-links flex w-full text-center gap-2 justify-center items-center">
          <h2 className="text-3xl font-bold border-r-2 pr-2 border-white">
            Login
          </h2>
          <h2 className="text-2xl text-primary-500">
            <Link href="/signup">Signup</Link>
          </h2>
        </div>
        <div className="flex flex-col text-center gap-2  mt-3 justify-center items-center">
          <p className="text-xs md:text-xl">
            Register Now to watch your favourite shows
          </p>
          <p className="font-bold">Or</p>
          <div className="flex gap-5 mt-8">
            <SocialLink
              icon="icons/flat-color-icons_google.svg"
              name="google"
              http="google.com"
            />
            <SocialLink
              icon="icons/ri_facebook-fill.svg"
              name="facebook"
              http="facebook.com"
            />
          </div>
        </div>
        <form
          className="flex flex-col gap-4 mt-8"
          onBlur={() => handleBlur}
          onSubmit={handleClickSubmit}
        >
          <TextInputLight
            label="Username"
            id="signup-username"
            placeholder="username"
            name="name"
            value={username}
            onChange={handleNameChange}
            onBlur={() => handleBlur("name")}
            error={nameError}
            required
            icon="icons/iconamoon_profile-thin.svg"
          />

          <TextInputLight
            label="Password"
            id="signup-password"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={() => handleBlur("password")}
            error={passwordError}
            required
            icon="icons/tabler_lock-filled.svg"
          />

          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 p-3 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
