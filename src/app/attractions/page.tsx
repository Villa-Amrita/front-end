"use client";

import Image from "next/image";
import NavBar from "~/components/NavBar";
import BlankLine from "~/components/BlankLine";
import PrimaryButton from "~/components/PrimaryButton";
import { type MouseEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function HomePage() {
  //create a state variable and use swiperonslide toupdate it everytime a slide changes

  const attractionImages = [
    "/Icon.png",
    "/Icon.png",
    "/Icon.png",
    "/Icon.png",
    "/Icon.png",
    "/Icon.png",
  ];
  const handleDirections = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <NavBar />
      <main className="mt-6 font-[poppins] lg:mt-8">
        <h1 className="flex items-center justify-center font-[poppins] text-2xl font-bold text-primary md:text-3xl">
          Attractions Finder
        </h1>
        <div className="block md:hidden">
          <BlankLine />
        </div>
        <section className="flex w-full items-center justify-center">
          <div className="mx-2 w-screen md:mx-0 md:w-3/4 md:self-start lg:w-2/5">
            <Swiper
              slidesPerView={1}
              navigation
              pagination={{ type: "fraction" }}
              modules={[Navigation, Pagination, EffectCoverflow]}
              effect="coverflow"
            >
              {attractionImages.map((image) => (
                <SwiperSlide key={image} className="min-h-[350px]">
                  <div className="flex min-h-[350px] w-full items-center justify-center">
                    <Image
                      src="/Icon.png"
                      alt="Villa Amrita Logo"
                      width={170}
                      height={170}
                      loading="lazy"
                    />
                  </div>
                  <div className="mb-12 flex flex-col items-center justify-center md:mb-20">
                    <h3 className="mb-3 font-[poppins] text-lg font-bold text-primary md:text-xl">
                      Lunugaga River
                    </h3>
                    <p className="text-center font-[poppins] text-base font-bold text-black md:text-lg">
                      Lunuganga river is a picturesque stream of water located
                      just 200m away from the villa.
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <BlankLine />
        <section className="flex w-full items-center justify-center">
          <div className="flex w-fit items-center justify-center font-bold">
            <PrimaryButton
              content="Directions"
              handleClick={handleDirections}
            />
          </div>
        </section>
        <BlankLine />
        <BlankLine />
        <BlankLine />
      </main>
    </>
  );
}
