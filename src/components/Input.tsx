import React  from "react";

 interface Props{
    label: string;
    placeholder:string;
 }
 function Input({label,placeholder}:Props) {
    return (
        <>
            <label className="flex flex-row text-white text-sm font-semibold mb-2">{label}</label>

        <input
            className= "px-4 py-2 bg-transparent text-white border-2 border-primary-500 placeholder-primary-200 rounded-md"
            placeholder={placeholder}
          /> 
        </>
        

    );
 };
 export default Input;