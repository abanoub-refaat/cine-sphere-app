/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import TextInputLight from "@/components/TextInputLight";

function Signup() {
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
      case "password":
        setIsPasswordTouched(true);
        if (password.trim() === "") {
          setPasswordError("Password is required");
        }
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
    <div className="flex flex-col h-screen justify-center items-center text-white py-24 gap-10 px-8 md:flex-row md:p-12 bg-[url(/Images/log-bg.png)] bg-cover">
      <div className="justify-center basis-1/2 items-center text-center  flex flex-col px-8">
        <img
          src={"/icons/nav-logo.svg"}
          alt="logo"
          className="mb-8 w-96 h-36"
        />
        <h2 className="text-md text-center md:text-5xl font-extrabold">
          The world’s Largest Movie Library
        </h2>
      </div>
      <div className="p-8 md:p-12 flex basis-1/2 flex-col justify-center items-center rounded-3xl backdrop-blur-md bg-[#594D5B] bg-opacity-20 max-w-[750px]">
        <div className="form-links flex w-full text-center gap-2 justify-center items-center">
          <h2 className="text-2xl font-bold border-r-2 pr-2 border-white">
            <Link href={"/signup"}> Signup</Link>
          </h2>
          <h2 className="text-2xl text-primary-500">
            <Link href="/login">Login</Link>
          </h2>
        </div>
        <div className="flex flex-col text-center gap-2 justify-center items-center">
          <p className="text-xs md:text-xl">
            Register Now to watch your favourite shows
          </p>
          <p className="font-bold">Or</p>
        </div>
        <form
          className="flex flex-col gap-4 mt-2"
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
            className="bg-primary-500 hover:bg-primary-600 p-3 rounded-md"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
