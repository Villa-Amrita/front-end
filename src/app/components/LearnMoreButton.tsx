"use client";

import React from "react";
import Link from "next/link";
import SecondaryButton from "~/components/SecondaryButton";

const LearnMoreButton = () => {
  const learnMore = () => {
    console.log("Learn More");
  };

  return (
    <div className="my-2 h-14 text-xl font-bold">
      <Link href="/about">
        <SecondaryButton content="Learn More" handleClick={learnMore} />
      </Link>
    </div>
  );
};

export default LearnMoreButton;
