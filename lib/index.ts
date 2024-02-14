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
  roomName: string;
  images: Image[];
};

export const rooms: Room[] = [
  { roomNumber: 1, roomName: "Honeymoon Suite", images: room1Images },
  { roomNumber: 2, roomName: "Family Room", images: room2Images },
  { roomNumber: 3, roomName: "Luxury Suite", images: room3Images },
];
