"use client";

import React, { type MouseEvent } from "react";

const ButtonList = () => {
  const getStarted = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/register";
  };

  const learnMore = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/about";
  };

  return (
    <section className="flex w-full space-x-4">
      {/* Left Column */}
      <div className="flex-1">
        <button
          className="h-20 w-full rounded-lg border border-primary bg-gradient-to-tr from-primary-light to-primary-dark px-4 py-2 text-lg font-bold text-white transition-colors hover:border-primary-light"
          onClick={getStarted}
        >
          Get Started
        </button>
      </div>

      {/* Right Column */}
      <div className="flex-1">
        <button
          className="h-20 w-full rounded-lg border border-primary bg-none px-4 py-2 text-lg font-bold text-primary transition-colors hover:border-primary-light hover:text-primary-light"
          onClick={learnMore}
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default ButtonList;
