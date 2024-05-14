/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { type DiningType } from "../page";
import Accordion from "~/components/Accordion";
import MealContent from "./MealContent";

interface DailyMealSelectorProps {
  date: Date;
  diningType: DiningType;
  meals: any[];
}

const DailyMealSelector = ({
  date,
  diningType,
  meals,
}: DailyMealSelectorProps) => {
  const [breakfastMeal, setBreakfastMeal] = useState(0);
  const [lunchMeal, setLunchMeal] = useState(0);
  const [dinnerMeal, setDinnerMeal] = useState(0);

  const updateBreakfastMeal = (meal: number) => {
    setBreakfastMeal(meal);
  };

  const updateLunchMeal = (meal: number) => {
    setLunchMeal(meal);
  };

  const updateDinnerMeal = (meal: number) => {
    setDinnerMeal(meal);
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
            handleSelection={updateBreakfastMeal}
            meals={meals}
          />
        </Accordion>
        <Accordion title="Lunch">
          <MealContent
            diningTime={DiningTime.Lunch}
            diningType={diningType}
            handleSelection={updateLunchMeal}
            meals={meals}
          />
        </Accordion>
        <Accordion title="Dinner">
          <MealContent
            diningTime={DiningTime.Dinner}
            diningType={diningType}
            handleSelection={updateDinnerMeal}
            meals={meals}
          />
        </Accordion>
      </div>
      <div className="flex w-full flex-col items-center justify-center rounded-lg border border-black py-2 font-[poppins] text-sm font-bold lg:w-3/4 lg:flex-row lg:space-x-4 lg:text-lg">
        <span
          className={`text-center ${breakfastMeal === 0 ? "text-red-500" : "text-primary"}`}
        >
          Breakfast:&nbsp;
          {breakfastMeal === 0
            ? "No Selection"
            : meals.find((meal) => meal.id === breakfastMeal)?.name}
        </span>
        <span
          className={`text-center ${lunchMeal === 0 ? "text-red-500" : "text-primary"}`}
        >
          Lunch:&nbsp;
          {lunchMeal === 0
            ? "No Selection"
            : meals.find((meal) => meal.id === lunchMeal)?.name}
        </span>
        <span
          className={`text-center ${dinnerMeal === 0 ? "text-red-500" : "text-primary"}`}
        >
          Dinner:&nbsp;
          {dinnerMeal === 0
            ? "No Selection"
            : meals.find((meal) => meal.id === dinnerMeal)?.name}
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
