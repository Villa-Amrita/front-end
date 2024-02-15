"use client";
import React, { type MouseEvent } from "react";

const BookNowButton = () => {
  const bookRoom = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <section className="mx-4 mb-8 md:mb-0 lg:my-14">
      <button
        className="flex h-8 w-full items-center justify-center rounded-md border border-black bg-white px-4 pb-6 pt-6 font-[poppins] text-xl font-bold text-black transition-colors hover:border-primary hover:bg-primary hover:text-white md:h-12 lg:h-16 lg:pb-0 lg:pt-0 lg:text-xl"
        onClick={bookRoom}
      >
        Book Now
      </button>
    </section>
  );
};

export default BookNowButton;
