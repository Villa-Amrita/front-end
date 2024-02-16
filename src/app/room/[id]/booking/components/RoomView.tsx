import React from "react";

interface RoomViewProps {
  roomNumber: number;
}

const RoomView = ({ roomNumber }: RoomViewProps) => {
  return (
    <div className="flex w-3/5 rounded-md border-2 border-primary font-[poppins] text-2xl font-bold md:w-fit lg:rounded-full">
      <div className="flex w-1/2 flex-1 flex-row items-center justify-center bg-primary px-6 py-2 text-white lg:rounded-l-full lg:px-12 lg:py-4">
        Room
      </div>
      <div className="flex w-1/2 flex-1 flex-row items-center justify-center px-6 py-2 text-primary lg:px-12 lg:py-4">
        {roomNumber}
      </div>
    </div>
  );
};

export default RoomView;
