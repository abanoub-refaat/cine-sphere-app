/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import TextInputLight from "@/components/TextInputLight";

function Signup() {
  const [username, setUsername] = useState("");
  const [nameError, setNameError] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (isNameTouched) {
      if (e.target.value.trim() === "") {
        setNameError("Username is required");
      } else {
        setNameError("");
      }
    }
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (isEmailTouched) {
      if (e.target.value.trim() === "") {
        setEmailError("Email is required");
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)
      ) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
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

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] =
    useState(false);
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    if (isConfirmPasswordTouched) {
      if (e.target.value.trim() === "") {
        setConfirmPasswordError("Confirm Password is required");
      } else if (e.target.value !== password) {
        setConfirmPasswordError("Passwords do not match");
      } else {
        setConfirmPasswordError("");
      }
    }
  };

  const handleClickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsNameTouched(true);
    setIsEmailTouched(true);

    if (username.trim() === "") {
      setNameError("Name is required");
    }
    if (email.trim() === "") {
      setEmailError("Email is required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError("Invalid email address");
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
      case "email":
        setIsEmailTouched(true);
        if (email.trim() === "") {
          setEmailError("Email is required");
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
          setEmailError("Invalid email address");
        }
        break;
      case "password":
        setIsPasswordTouched(true);
        if (password.trim() === "") {
          setPasswordError("Password is required");
        }
        break;
      case "confirmPassword":
        setIsConfirmPasswordTouched(true);
        if (confirmPassword.trim() === "") {
          setConfirmPasswordError("Confirm Password is required");
        } else if (confirmPassword !== password) {
          setConfirmPasswordError("Passwords do not match");
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white py-8 px-4 lg:py-12 lg:px-8 lg:flex-row bg-[url(/Images/log-bg.png)] bg-cover bg-center">
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 lg:px-8 mb-8 lg:mb-0">
        <div className="w-full max-w-md lg:max-w-lg">
          <img
            src={"/icons/nav-logo.svg"}
            alt="logo"
            className="mb-6 lg:mb-8 w-64 h-24 lg:w-96 lg:h-36 mx-auto object-contain"
          />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight">
            The world&apos;s Largest Movie Library
          </h2>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center w-full max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="w-full p-6 sm:p-8 lg:p-12 rounded-3xl backdrop-blur-md bg-[#594D5B] bg-opacity-20">
          <div className="form-links flex w-full text-center gap-2 justify-center items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold border-r-2 pr-2 border-white">
              <Link href={"/signup"}>Signup</Link>
            </h2>
            <h2 className="text-xl sm:text-2xl text-primary-500">
              <Link href="/login">Login</Link>
            </h2>
          </div>
          <div className="flex flex-col text-center gap-2 justify-center items-center mb-6">
            <p className="text-sm sm:text-base lg:text-xl">
              Register Now to watch your favourite shows
            </p>
            <p className="font-bold">Or</p>
          </div>
          <form
            className="flex flex-col gap-4 lg:gap-6"
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
              label="Email"
              id="signup-email"
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => handleBlur("email")}
              error={emailError}
              required
              icon="icons/ic_baseline-email.svg"
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

            <TextInputLight
              label="Confirm Password"
              id="signup-confirm-password"
              name="confirmPassword"
              placeholder="Confirm password"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onBlur={() => handleBlur("confirmPassword")}
              error={confirmPasswordError}
              required
              icon="icons/tabler_lock-filled.svg"
            />

            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 p-3 rounded-md mt-2"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
