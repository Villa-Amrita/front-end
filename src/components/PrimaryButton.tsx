"use client";

import React, { type MouseEventHandler } from "react";

interface PrimaryButtonProps {
  content: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const PrimaryButton = ({ content, handleClick }: PrimaryButtonProps) => {
  return (
    <button
      className="btn-primary btn-block h-full w-full rounded-md"
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
