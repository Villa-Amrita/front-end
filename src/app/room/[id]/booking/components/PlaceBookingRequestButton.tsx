"use client";

import React from "react";
import PrimaryButton from "~/components/PrimaryButton";

interface PlaceBookingRequestButtonProps {
  roomNumber: number;
}

const PlaceBookingRequestButton = ({
  roomNumber,
}: PlaceBookingRequestButtonProps) => {
  const handleBookingRequest = () => {
    console.log("Booking request sent" + roomNumber);
  };

  return (
    <div>
      <PrimaryButton
        content="Place Booking Request"
        handleClick={handleBookingRequest}
      />
    </div>
  );
};

export default PlaceBookingRequestButton;
