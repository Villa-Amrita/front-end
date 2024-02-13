"use client";

import React, { type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import PrimaryButton from "~/components/PrimaryButton";

const GetStartedButton = () => {
  const router = useRouter();
  const auth = getAuth();
  const user = auth.currentUser;

  const getStarted = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/register");
    }
  };

  return (
    <div className="my-2 h-14 text-xl font-bold">
      <PrimaryButton content="Get Started" handleClick={getStarted} />
    </div>
  );
};

export default GetStartedButton;
