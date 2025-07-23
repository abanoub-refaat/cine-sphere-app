"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TextInputLight from "@/components/TextInputLight";
import SocialLink from "@/components/SocialLink";
import { useRouter } from "next/navigation";

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
    setIsPasswordTouched(true);

    let hasErrors = false;

    if (username.trim() === "") {
      setNameError("Username is required");
      hasErrors = true;
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      hasErrors = true;
    }

    if (!hasErrors) {
      // Handle successful login
      console.log("Login submitted", { username, password });
    }
  };

  const handleBlur = (field: string) => {
    switch (field) {
      case "name":
        setIsNameTouched(true);
        if (username.trim() === "") {
          setNameError("Username is required");
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

  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[url(/Images/log-bg.png)] bg-cover bg-center">
      <div className="flex-1 flex flex-col justify-center items-center text-white p-8 lg:p-12">
        <div className="max-w-md text-center space-y-6">
          <Image
            src={"/icons/nav-logo.svg"}
            width={250}
            height={200}
            alt="logo"
            className="mx-auto w-64 h-24 lg:w-80 lg:h-32"
            onClick={() => router.push("/")}
          />
          <h2 className="text-2xl lg:text-4xl xl:text-5xl font-extrabold leading-tight">
            The world&apos;s Largest Movie Library
          </h2>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center p-4 lg:p-8">
        <div className="w-full max-w-md p-6 lg:p-8 rounded-3xl backdrop-blur-md bg-[#594D5B] bg-opacity-20">
          <div className="flex justify-center items-center gap-4 mb-6">
            <h2 className="text-xl lg:text-2xl text-primary-500">
              <Link href="/signup">Signup</Link>
            </h2>
            <div className="h-6 w-px bg-white"></div>
            <h2 className="text-xl lg:text-2xl text-white font-bold">
              <Link href="/login">Login</Link>
            </h2>
          </div>

          <div className="text-center space-y-4 mb-8">
            <p className="text-sm lg:text-lg text-white">
              Register Now to watch your favourite shows
            </p>
            <p className="font-bold text-white">Or</p>
            <div className="flex justify-center gap-4">
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

          <form className="space-y-4" onSubmit={handleClickSubmit}>
            <TextInputLight
              label="Username"
              id="login-username"
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
              id="login-password"
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
              className="w-full bg-primary-500 hover:bg-primary-600 transition-colors duration-200 p-3 rounded-md font-medium"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
