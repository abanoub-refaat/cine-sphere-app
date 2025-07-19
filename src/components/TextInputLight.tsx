"use clinet";
import React from "react";
import Image from "next/image";

interface Props {
  label: string;
  placeholder: string;
  id: string;
  name: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error: string;
  width?: "w-full";
  icon?: string;
  className?: string;
}

const TextInputLight = ({
  placeholder,
  id,
  name,
  value,
  onChange,
  error,
  type = "text",
  icon,
  className,
}: Props) => {
  return (
    <div className="w-full px-2 my-4 md:mb-0">
      <div
        className={`flex items-center justify-center bg-transparent border border-primary-300 rounded-md outline-none p-4 px-10 w-full ${className}`}
      >
        <input
          className="transition-colors duration-200 bg-transparent outline-none"
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <Image src={icon ?? ""} alt="icon" width={30} height={30} />
      </div>
      {error && <span className="text-red-400">{error}</span>}
    </div>
  );
};

export default TextInputLight;
