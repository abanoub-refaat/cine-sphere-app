/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

interface Props {
  question: string;
  answer: string;
  id: number;
}

function Accordion({ question, answer, id }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between w-80 flex-col rounded-lg bg-opacity-55 bg-dark text-white p-5 m-2">
      <button
        className="flex justify-between items-start text-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <img
          src="icons/btn-dropdown.svg"
          alt="button dropdown menu"
          style={{ width: 30, height: 30 }}
        />
      </button>
      {isOpen && id == id ? (
        <span className="text-lg font-medium mt-4">{answer}</span>
      ) : (
        ""
      )}
    </div>
  );
}

export default Accordion;
