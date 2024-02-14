import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getRoomImage } from "~/app/utils/Rooms";
import { type Image as ImageType } from "lib";
import DefaultImage from "public/Original-Icon.png";

interface RoomImageProps {
  roomNumber: number;
  imageNumber: number;
  roomName: string;
}

const RoomImage = ({ roomNumber, imageNumber, roomName }: RoomImageProps) => {
  let roomImage: ImageType = {
    src: DefaultImage,
    alt: "Default room image",
  };
  try {
    roomImage = getRoomImage(roomNumber, imageNumber);
  } catch (error) {
    console.log(error);
  }

  return (
    <Link href={`/room/${roomNumber}`}>
      <div className="h-fit w-fit">
        <h2 className="mb-4 text-center font-[poppins] text-lg transition-colors hover:text-primary-dark md:text-xl">
          Room {roomNumber}: {roomName}
        </h2>
        <div className="flex items-center justify-center">
          <Image
            src={roomImage.src}
            alt={roomImage.alt}
            width={375}
            height={375}
            loading="lazy"
          />
        </div>
      </div>
    </Link>
  );
};

export default RoomImage;
