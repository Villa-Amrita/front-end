import React from "react";

interface PrimaryButtonProps {
  content: string;
}

const PrimaryButton = ({ content }: PrimaryButtonProps) => {
  return (
    <button className="btn-primary btn-block h-full w-full">{content}</button>
  );
};

export default PrimaryButton;
