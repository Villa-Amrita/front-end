import { rooms, type Room, type Image as ImageType } from "lib";
import { isElementOfType } from "react-dom/test-utils";

let room1: Room;
let room2: Room;
let room3: Room;

const searchForRoom1 = rooms.find((room) => room.roomNumber === 1);
if (searchForRoom1) {
  room1 = searchForRoom1;
}

const searchForRoom2 = rooms.find((room) => room.roomNumber === 2);
if (searchForRoom2) {
  room2 = searchForRoom2;
}

const searchForRoom3 = rooms.find((room) => room.roomNumber === 3);
if (searchForRoom3) {
  room3 = searchForRoom3;
}

const getRoomImages = (roomNumber: number): ImageType[] => {
  switch (roomNumber) {
    case 1: {
      return room1.images;
    }
    case 2: {
      return room2.images;
    }
    case 3: {
      return room3.images;
    }
    default: {
      throw new Error(`Room ${roomNumber} does not exist`);
    }
  }
};

export const getRoomImage = (
  roomNumber: number,
  imageNumber: number,
): ImageType => {
  const images: ImageType[] = getRoomImages(roomNumber);
  if (images.length > 0) {
    const image = images[imageNumber - 1];
    if (image) {
      return image;
    }
    throw new Error(`Room ${roomNumber}, Image ${imageNumber} is not an Image`);
  } else {
    throw new Error(`Room ${roomNumber}, Image ${imageNumber} does not exist`);
  }
};
