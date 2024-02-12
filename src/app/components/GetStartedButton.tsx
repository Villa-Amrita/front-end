"use client";

import React, { type MouseEvent } from "react";
import PrimaryButton from "~/components/PrimaryButton";

const GetStartedButton = () => {
  const getStarted = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/register";
  };

  return (
    <div className="my-2 h-14 text-xl font-bold">
      <PrimaryButton content="Get Started" handleClick={getStarted} />
    </div>
  );
};

export default GetStartedButton;
