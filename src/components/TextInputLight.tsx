"use client";
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
  onBlur,
  error,
  type = "text",
  required,
  icon,
  className,
}: Props) => {
  return (
    <div className="w-full">
      <div
        className={`flex items-center bg-transparent border border-primary-300 rounded-md outline-none p-5 gap-3 ${className}`}
      >
        <input
          className="flex-1 bg-transparent outline-none placeholder:text-white text-white w-full"
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
        />
        {icon && (
          <Image
            src={icon}
            alt="input icon"
            width={20}
            height={20}
            className="flex-shrink-0"
          />
        )}
      </div>
      {error && (
        <span className="text-red-400 text-sm mt-1 block">{error}</span>
      )}
    </div>
  );
};

export default TextInputLight;
