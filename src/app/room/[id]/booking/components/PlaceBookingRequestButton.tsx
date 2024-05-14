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
      if (cookies.get("specialRequests") == null) {
        cookies.set("specialRequests", "None");
      }
      const specialRequests = cookies.get("specialRequests");
      const startDate = cookies.get("startDate");
      let endDate = cookies.get("endDate") as Date;
      endDate = new Date(endDate);
      endDate.setDate(endDate.getDate() - 1);
      const formattedEndDate = endDate.toISOString().split("T")[0];
      const roomId = roomNumber;
      const customerId = getUserId();
      const status = "PENDING";

      if (!formattedEndDate) {
        throw new Error("No end date found");
      }

      const reservation = await createReservation({
        roomId: roomId,
        customerId: customerId,
        startDate: startDate,
        endDate: formattedEndDate,
        specialRequests: specialRequests,
        status: status,
      });
      const reservationId = reservation.id;
      cookies.remove("specialRequests");

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
