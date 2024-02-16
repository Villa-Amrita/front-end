"use client";

import React from "react";
import PrimaryButton from "~/components/PrimaryButton";

interface ProceedButtonProps {
  handleProceed: () => void;
}

const ProceedButton = ({ handleProceed }: ProceedButtonProps) => {
  return (
    <div className="mx-3 w-full font-[poppins] text-lg font-bold lg:mx-0 lg:w-[15rem]">
      <PrimaryButton content="Proceed" handleClick={handleProceed} />
    </div>
  );
};

export default ProceedButton;
