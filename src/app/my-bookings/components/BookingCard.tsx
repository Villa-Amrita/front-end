"use client";

import React from "react";
import { RequestStatus } from "../page";
import PrimaryButton from "~/components/PrimaryButton";

interface BookingCardProps {
  requestNumber: number;
  requestStatus: RequestStatus;
}

const BookingCard = ({ requestNumber, requestStatus }: BookingCardProps) => {
  const buttonStyles =
    "flex min-w-24 items-center justify-center rounded-md bg-primary p-2 font-[poppins] text-lg font-bold text-white transition-colors hover:bg-primary-dark md:min-w-32 lg:min-w-40";

  return (
    <div className="my-2 flex items-center justify-between rounded-md border border-primary px-2 font-[poppins] text-xl font-bold lg:my-1">
      <div className="flex items-center space-x-4">
        <div className="flex min-w-20 justify-center rounded-md bg-primary p-2 text-white">
          #{requestNumber}
        </div>
        <div className="text-2xl">
          {requestStatus === RequestStatus.Processing && (
            <span className="text-gray-600">Processing</span>
          )}
          {requestStatus === RequestStatus.Rejected && (
            <span className="text-red-600">Rejected</span>
          )}
          {requestStatus === RequestStatus.Confirmed && (
            <span className="text-yellow-400">Confirmed</span>
          )}
          {requestStatus === RequestStatus.Payed && (
            <span className="text-green-600">Payed</span>
          )}
        </div>
      </div>
      <div className="p-2">
        {/* {requestStatus === RequestStatus.Processing && (
          <button className={buttonStyles}>Inquire</button>
        )}
        {requestStatus === RequestStatus.Rejected && (
          <button className={buttonStyles}>View</button>
        )} */}
        {requestStatus === RequestStatus.Confirmed && (
          <button className={buttonStyles}>Pay</button>
        )}
        {/* {requestStatus === RequestStatus.Payed && (
          <button className={buttonStyles}>Invoice</button>
        )} */}
      </div>
    </div>
  );
};

export default BookingCard;
