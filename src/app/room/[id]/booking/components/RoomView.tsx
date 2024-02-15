import React from "react";

interface RoomViewProps {
  roomNumber: number;
}

const RoomView = ({ roomNumber }: RoomViewProps) => {
  return (
    <div className="flex w-full rounded-md border-2 border-primary font-[poppins] text-2xl font-bold md:w-fit lg:rounded-full">
      <div className="flex w-1/2 flex-1 flex-row items-center justify-center bg-primary px-12 py-4 text-white lg:rounded-l-full">
        Room
      </div>
      <div className="flex w-1/2 flex-1 flex-row items-center justify-center px-12 py-4 text-primary">
        {roomNumber}
      </div>
    </div>
  );
};

export default RoomView;
