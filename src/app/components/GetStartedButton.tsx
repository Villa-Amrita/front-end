"use client";

import React, { type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "~/components/PrimaryButton";

const GetStartedButton = () => {
  const router = useRouter();

  const getStarted = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/register");
  };

  return (
    <div className="my-2 h-14 text-xl font-bold">
      <PrimaryButton content="Get Started" handleClick={getStarted} />
    </div>
  );
};

export default GetStartedButton;
