"use client";

import React, { type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getAuth } from "firebase/auth";

const ButtonList = () => {
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

  const learnMore = () => {
    console.log("Learn More");
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
        <Link href="/about">
          <button
            className="h-20 w-full rounded-lg border border-primary bg-none px-4 py-2 text-lg font-bold text-primary transition-colors hover:border-primary-light hover:text-primary-light"
            onClick={learnMore}
          >
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ButtonList;
