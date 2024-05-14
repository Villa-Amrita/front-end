/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "~/components/PrimaryButton";
import Cookies from "universal-cookie";
import { getUserId } from "~/app/utils/Authentication";
import { createReservation } from "lib/client";

interface PlaceBookingRequestButtonProps {
  roomNumber: number;
}

const PlaceBookingRequestButton = ({
  roomNumber,
}: PlaceBookingRequestButtonProps) => {
  const router = useRouter();

  const handleBookingRequest = async () => {
    try {
      const cookies = new Cookies();
      const specialRequests = cookies.get("specialRequests");
      const startDate = cookies.get("startDate");
      const endDate = cookies.get("endDate");
      const roomId = roomNumber;
      const customerId = getUserId();
      const status = "PENDING";
      const reservation = await createReservation({
        roomId: roomId,
        customerId: customerId,
        startDate: startDate,
        endDate: endDate,
        specialRequests: specialRequests,
        status: status,
      });
      const reservationId = reservation.id;

      console.log("Booking request sent" + roomNumber);
      router.push(`/request/${reservationId}`);
    } catch (error) {
      console.log(error);
    }
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
