"use client";
import React, { useState } from "react";
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";

function AccordionSection() {
  const [openAccordId, setOpenAccordId] = useState<number | null>(null);

  const handelAccordToggle = (id: number) => {
    setOpenAccordId(openAccordId === id ? null : id);
  };
  return (
    <div className="flex flex-col justify-center items-center transition-all duration-300 content-center gap-8 bg-black p-8 sm:p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Accordion
          id={0}
          question="What is Cine Sphere?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
          isOpen={openAccordId === 0}
          onToggle={handelAccordToggle}
        />
        <Accordion
          id={1}
          question="Can I download movies and shows to watch offline?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
          isOpen={openAccordId === 1}
          onToggle={handelAccordToggle}
        />
        <Accordion
          id={2}
          question="Can I share my account with others?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
          isOpen={openAccordId === 2}
          onToggle={handelAccordToggle}
        />
        <Accordion
          id={3}
          question="What if I forget my password?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
          isOpen={openAccordId === 3}
          onToggle={handelAccordToggle}
        />
        <Accordion
          id={4}
          question="What subscription plans does Cine Sphere offer?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
          isOpen={openAccordId === 4}
          onToggle={handelAccordToggle}
        />
        <Accordion
          id={5}
          question="How do I cancel my subscription?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
          isOpen={openAccordId === 5}
          onToggle={handelAccordToggle}
        />
        <Accordion
          id={6}
          question="How do I report an issue with the platform?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
          isOpen={openAccordId === 6}
          onToggle={handelAccordToggle}
        />
        <Accordion
          id={8}
          question="How do I create a Fan Art Creator Profile?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
          isOpen={openAccordId === 8}
          onToggle={handelAccordToggle}
        />
      </div>
      <Button
        title="Ask a Question"
        hasIcon={false}
        styles="w-full sm:w-auto p-20"
      />
    </div>
  );
}

export default AccordionSection;
