"use client";

import React from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "~/components/PrimaryButton";

interface PlaceBookingRequestButtonProps {
  roomNumber: number;
}

const PlaceBookingRequestButton = ({
  roomNumber,
}: PlaceBookingRequestButtonProps) => {
  const router = useRouter();

  const handleBookingRequest = () => {
    console.log("Booking request sent" + roomNumber);
    router.push(`/request/1`);
  };

  return (
    <div className="font-[poppins] text-lg font-bold">
      <PrimaryButton
        content="Place Booking Request"
        handleClick={handleBookingRequest}
      />
    </div>
  );
};

export default PlaceBookingRequestButton;
