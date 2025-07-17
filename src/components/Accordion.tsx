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
    <div className="flex justify-between w-96 flex-col rounded-lg bg-opacity-55 bg-dark text-white p-5 m-2">
      <button
        className="flex justify-between items-start text-start"
        onClick={() => onToggle(id)}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <img
            src="icons/btn-dropdown-reverse-2.svg"
            alt="button dropdown menu"
            style={{ width: 30, height: 30 }}
          />
        ) : (
          <img
            src="icons/btn-dropdown.svg"
            alt="button dropdown menu"
            style={{ width: 30, height: 30 }}
          />
        )}
      </button>
      {isOpen ? (
        <span className="text-lg font-medium mt-4 duration-300">{answer}</span>
      ) : (
        ""
      )}
    </div>
  );
}

export default Accordion;
