import { type StaticImageData } from "next/image";
import { room1Images } from "./room-1-images";
import { room2Images } from "./room-2-images";
import { room3Images } from "./room-3-images";

export type Image = {
  src: StaticImageData;
  alt: string;
};

export type Room = {
  roomNumber: number;
  images: Image[];
};

export const rooms: Room[] = [
  { roomNumber: 1, images: room1Images },
  { roomNumber: 2, images: room2Images },
  { roomNumber: 3, images: room3Images },
];
