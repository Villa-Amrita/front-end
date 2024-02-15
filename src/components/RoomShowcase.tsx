/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { getRoomImages, getRoomName } from "~/app/utils/Rooms";
import { type Image as ImageType } from "lib";
import DefaultImage from "public/Original-Icon.png";
import BlankLine from "./BlankLine";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface RoomShowcaseProps {
  roomNumber: number;
}

const RoomShowcase = ({ roomNumber }: RoomShowcaseProps) => {
  const defaultimage: ImageType = {
    src: DefaultImage,
    alt: "Default room image",
  };
  let roomImages: ImageType[] = [defaultimage, defaultimage, defaultimage];

  try {
    roomImages = getRoomImages(roomNumber);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="flex flex-col items-center justify-between">
      <h1 className="font-[poppins] text-xl font-bold text-primary md:text-2xl lg:text-3xl">
        Room {roomNumber}: {getRoomName(roomNumber)}
      </h1>

      <BlankLine />
      <BlankLine />
      <div className="hidden md:block">
        <BlankLine />
      </div>

      <div className="mx-2 w-screen md:mx-0 md:w-3/4 md:self-start lg:w-2/5">
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
        >
          {roomImages.map((image: ImageType, index: number) => (
            <SwiperSlide key={index} className=" min-h-[350px]">
              <div className="flex min-h-[350px] w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={350}
                  height={350}
                  loading="lazy"
                  className="h-full w-full md:h-fit md:w-fit"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RoomShowcase;
