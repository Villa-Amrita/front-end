"use client";

import React, { type MouseEventHandler } from "react";

interface SecondaryButtonProps {
  content: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const PrimaryButton = ({ content, handleClick }: SecondaryButtonProps) => {
  return (
    <button
      className="btn-secondary btn-block h-full w-full rounded-md"
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
