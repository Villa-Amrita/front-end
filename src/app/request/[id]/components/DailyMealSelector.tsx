"use client";

import React, { useState } from "react";
import { type DiningType } from "../page";
import Accordion from "~/components/Accordion";
import MealContent from "./MealContent";

interface DailyMealSelectorProps {
  date: Date;
  diningType: DiningType;
}

const DailyMealSelector = ({ date, diningType }: DailyMealSelectorProps) => {
  const [breakfastFood, setBreakfastFood] = useState(0);
  const [lunchFood, setLunchFood] = useState(0);
  const [dinnerFood, setDinnerFood] = useState(0);

  const updateBreakfastFood = (cuisine: number) => {
    setBreakfastFood(cuisine);
  };

  const updateLunchFood = (cuisine: number) => {
    setLunchFood(cuisine);
  };

  const updateDinnerFood = (cuisine: number) => {
    setDinnerFood(cuisine);
  };

  const formatDate = (date: Date): string => {
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="mb-2 flex items-center justify-center">
        <h2 className="font-[poppins] text-lg font-bold text-black">
          {formatDate(date)}
        </h2>
      </div>
      <div className="font-[poppins] text-base lg:w-3/4">
        <Accordion title="Breakfast">
          <MealContent
            diningTime={DiningTime.Breakfast}
            diningType={diningType}
            handleSelection={updateBreakfastFood}
          />
        </Accordion>
        <Accordion title="Lunch">
          <MealContent
            diningTime={DiningTime.Lunch}
            diningType={diningType}
            handleSelection={updateLunchFood}
          />
        </Accordion>
        <Accordion title="Dinner">
          <MealContent
            diningTime={DiningTime.Dinner}
            diningType={diningType}
            handleSelection={updateDinnerFood}
          />
        </Accordion>
      </div>
      <div className="flex w-full flex-col items-center justify-center rounded-lg border border-black py-2 font-[poppins] text-sm font-bold lg:w-3/4 lg:flex-row lg:space-x-4 lg:text-lg">
        <span
          className={`text-center ${breakfastFood === 0 ? "text-red-500" : "text-primary"}`}
        >
          Breakfast:&nbsp;{breakfastFood === 0 ? "No Selection" : breakfastFood}
        </span>
        <span
          className={`text-center ${lunchFood === 0 ? "text-red-500" : "text-primary"}`}
        >
          Lunch:&nbsp;{lunchFood === 0 ? "No Selection" : lunchFood}
        </span>
        <span
          className={`text-center ${dinnerFood === 0 ? "text-red-500" : "text-primary"}`}
        >
          Dinner:&nbsp;{dinnerFood === 0 ? "No Selection" : dinnerFood}
        </span>
      </div>
    </section>
  );
};

export enum DiningTime {
  "Breakfast",
  "Lunch",
  "Dinner",
}

export default DailyMealSelector;
