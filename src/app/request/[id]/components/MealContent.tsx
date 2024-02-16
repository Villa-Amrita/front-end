"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { type DiningTime } from "./DailyMealSelector";
import { type DiningType } from "../page";
import BlankLine from "~/components/BlankLine";

interface MealContentProps {
  diningTime: DiningTime;
  diningType: DiningType;
  handleSelection: (cuisine: number) => void;
}

const MealContent = ({
  diningTime,
  diningType,
  handleSelection,
}: MealContentProps) => {
  const recommendations = [1, 4, 8];
  const allCuisines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const [selectedFood, setSelectedFood] = useState(0);

  useEffect(() => {
    console.log("Selected Food changed:", selectedFood);
    handleSelection(selectedFood);
  }, [selectedFood, handleSelection]);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div>
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
      <BlankLine />
      <BlankLine />
      <div className="text-center">
        <h2>All Cuisines</h2>
        <div className="my-4 grid w-full grid-cols-3">
          {allCuisines.map((cuisine) => (
            <div key={cuisine}>
              <button
                className={`mx-2 rounded-3xl p-4 hover:bg-gray-100 lg:mx-20 lg:mb-4 ${
                  cuisine === selectedFood && "bg-gray-300"
                }`}
                onClick={() => setSelectedFood(cuisine)}
              >
                <Image
                  src="/Icon.png"
                  alt="Food"
                  height={200}
                  width={200}
                  loading="lazy"
                />
                <span className="flex items-center justify-center font-medium text-black">
                  Food {cuisine}
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
            Selected: {selectedFood}
          </span>
        )}
      </div>
    </div>
  );
};

export default MealContent;
