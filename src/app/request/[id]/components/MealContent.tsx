/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DiningTime } from "./DailyMealSelector";
import { DiningType } from "../page";
import BlankLine from "~/components/BlankLine";

interface MealContentProps {
  diningTime: DiningTime;
  diningType: DiningType;
  handleSelection: (cuisine: number) => void;
  meals: any[];
}

const MealContent = ({
  diningTime,
  diningType,
  handleSelection,
  meals,
}: MealContentProps) => {
  // const recommendations = [1, 4, 8];
  let filteredMeals: any[] = [];

  console.log(meals);

  if (diningTime === DiningTime.Breakfast) {
    filteredMeals = meals.filter((meal) => meal.breakfastAvailable === true);
  } else if (diningTime === DiningTime.Lunch) {
    filteredMeals = meals.filter((meal) => meal.lunchAvailable === true);
  } else if (diningTime === DiningTime.Dinner) {
    filteredMeals = meals.filter((meal) => meal.dinnerAvailable === true);
  }

  if (diningType === DiningType.None) {
    filteredMeals = filteredMeals.filter((meal) => meal.mealPlanId === 1);
  } else if (diningType === DiningType.Chef) {
    filteredMeals = filteredMeals.filter((meal) => meal.mealPlanId === 2);
  } else if (diningType === DiningType.Restaurant) {
    filteredMeals = filteredMeals.filter((meal) => meal.mealPlanId === 3);
  }

  const [selectedFood, setSelectedFood] = useState(0);

  useEffect(() => {
    console.log("Selected Food changed:", selectedFood);
    handleSelection(selectedFood);
  }, [selectedFood, handleSelection]);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {/* <div>
        <h2 className="text-center">Recommended</h2>
        <div className="my-4 grid w-full grid-cols-3 gap-2 lg:gap-20">
          {recommendations.map((recommendation) => (
            <div key={recommendation}>
              <button
                className={`rounded-3xl p-4 hover:bg-gray-100 ${recommendation === selectedFood && "bg-gray-300"}`}
                onClick={() => setSelectedFood(recommendation)}
              >
                <Image
                  src="/Icon.png"
                  alt="Food"
                  height={200}
                  width={200}
                  loading="lazy"
                />
                <span className="flex items-center justify-center font-medium text-black">
                  Food {recommendation}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <BlankLine /> */}
      <BlankLine />
      <div className="text-center">
        <h2>All Cuisines</h2>
        <div className="my-4 grid w-full grid-cols-3">
          {filteredMeals.map((meal) => (
            <div key={meal.id}>
              <button
                className={`mx-2 rounded-3xl p-4 hover:bg-gray-100 lg:mx-20 lg:mb-4 ${
                  meal === selectedFood && "bg-gray-300"
                }`}
                onClick={() => setSelectedFood(meal.id)}
              >
                <Image
                  src="/Icon.png"
                  alt="Food"
                  height={200}
                  width={200}
                  loading="lazy"
                />
                <span className="flex items-center justify-center font-medium text-black">
                  {meal.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <BlankLine />
      <BlankLine />
      <div>
        {selectedFood === 0 ? (
          <span className="text-center text-red-500">No food selected</span>
        ) : (
          <span className="text-center text-primary">
            Selected: {meals.find((meal) => meal.id === selectedFood)?.name}
          </span>
        )}
      </div>
    </div>
  );
};

export default MealContent;
