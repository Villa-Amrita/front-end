"use client";

import React, { type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "~/components/PrimaryButton";

interface BookNowButtonProps {
  roomNumber: number;
}

const BookNowButton = ({ roomNumber }: BookNowButtonProps) => {
  const router = useRouter();

  const bookRoom = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(`/room/${roomNumber}/booking`);
  };

  return (
    <section className="mx-4 mb-8 flex items-center justify-center md:mb-0 lg:my-14">
      <div className="w-full font-[poppins] text-lg font-bold lg:w-fit lg:min-w-[15rem]">
        <PrimaryButton content="Book Now" handleClick={bookRoom} />
      </div>
    </section>
  );
};

export default BookNowButton;
