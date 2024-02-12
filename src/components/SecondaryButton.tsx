import React from "react";

interface SecondaryButtonProps {
  content: string;
}

const PrimaryButton = ({ content }: SecondaryButtonProps) => {
  return (
    <button className="btn-secondary btn-block h-full w-full rounded-md">
      {content}
    </button>
  );
};

export default PrimaryButton;
