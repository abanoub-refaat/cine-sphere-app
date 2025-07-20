import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface PhoneInputFieldProps {
  label: string;
  id: string;
  name: string;
  required?: boolean;
  error?: string;
  onChange: (e: { target: { value: string; name: string } }) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  value: string;
  placeholder?: string;
  defaultCountry?: string;
}

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  label,
  id,
  name,
  required = false,
  error = "",
  onChange,
  value,
  placeholder = "+1 (555) 000-0000",
  defaultCountry = "us",
}) => {
  return (
    <div className="w-full px-2 my-4 md:mb-0">
      <label
        htmlFor={id}
        className={`mb-2 text-lg font-medium text-white ${
          error ? "text-red-500" : "text-white"
        }`}
      >
        {label} {required && <span className="text-purple-500"></span>}
      </label>
      <PhoneInput
        defaultCountry={defaultCountry}
        value={value}
        onChange={(phone: string) =>
          onChange({ target: { value: phone, name } })
        }
        inputProps={{
          id,
          name,
          required,
          placeholder,
        }}
        inputClassName={`w-full px-4 py-2 border rounded-md bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-300"
            : "border-primary-500 focus:ring-primary-500"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default PhoneInputField;
