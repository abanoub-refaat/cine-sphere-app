/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

interface Props {
  question: string;
  answer: string;
  id: number;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

function Accordion({ question, answer, id, isOpen, onToggle }: Props) {
  return (
    <div
      className={`flex justify-between min-h-20 w-96 flex-col transition-all duration-300 rounded-lg  bg-dark text-white p-5 m-2`}
    >
      <button
        className="flex justify-between items-start text-start"
        onClick={() => onToggle(id)}
      >
        <span className="text-md font-medium">{question}</span>

        <img
          src="icons/btn-dropdown.svg"
          alt="button dropdown menu"
          style={{ width: 30, height: 30 }}
          className={`transition-all delay-75 duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <span
        className={
          `text-lg font-medium mt-4 duration-300 h-0 overflow-hidden transition-all ease-in-out ` +
          (isOpen ? "h-44" : "h-0")
        }
      >
        <hr className="pb-2" />
        {answer}
      </span>
    </div>
  );
}

export default Accordion;
