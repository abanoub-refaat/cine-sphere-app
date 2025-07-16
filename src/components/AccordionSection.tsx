import React from "react";
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";

function AccordionSection() {
  return (
    <div className="flex flex-col justify-center items-center content-center gap-8 bg-black p-8 sm:p-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Accordion
          id={0}
          question="What is Cine Sphere?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
        />
        <Accordion
          id={1}
          question="Can I download movies and shows to watch offline?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
        />
        <Accordion
          id={2}
          question="Can I share my account with others?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
        />
        <Accordion
          id={3}
          question="What if I forget my password?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
        />
        <Accordion
          id={4}
          question="What subscription plans does Cine Sphere offer?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
        />
        <Accordion
          id={5}
          question="How do I cancel my subscription?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
        />
        <Accordion
          id={6}
          question="How do I report an issue with the platform?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
        />
        <Accordion
          id={8}
          question="How do I create a Fan Art Creator Profile?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla est quis tempor feugiat. Maecenas id libero non ex porta dictum a eu est. Etiam lacus lectus, fermentum et molestie mollis, semper vitae augue."
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
