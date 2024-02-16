"use client";

import React, { type ReactNode, useState } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion = ({ title, children: Children }: AccordionProps) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className={`w-full ${isAccordionOpen ? "mb-1" : ""}`}>
      <button
        className={`flex w-full flex-row items-center justify-between rounded-t-lg border border-primary bg-primary px-3 py-1 font-bold text-white transition-all duration-200 lg:px-4 lg:py-2 ${isAccordionOpen ? "" : "rounded-b-lg"}`}
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
      >
        <span>{title}</span>
        {isAccordionOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden rounded-b-lg border border-primary bg-white px-2 font-bold text-primary transition-all duration-200 ease-in-out ${isAccordionOpen ? "grid-rows-[1fr] py-1 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className={`overflow-hidden ${isAccordionOpen ? "py-2" : ""}`}>
          {Children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
