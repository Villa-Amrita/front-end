"use client";

import React, { type MouseEvent } from "react";
import SecondaryButton from "~/components/SecondaryButton";

const LearnMoreButton = () => {
  const learnMore = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/about";
  };

  return (
    <div className="my-2 h-14 text-xl font-bold">
      <SecondaryButton content="Learn More" handleClick={learnMore} />
    </div>
  );
};

export default LearnMoreButton;
