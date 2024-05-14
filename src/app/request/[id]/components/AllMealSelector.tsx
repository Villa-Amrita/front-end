/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { DiningType } from "../page";
import BlankLine from "~/components/BlankLine";
import DailyMealSelector from "./DailyMealSelector";

interface AllMealSelectorProps {
  requestNumber: number;
  diningType: DiningType;
  dates: Date[];
  meals: any[];
}

const AllMealSelector = ({
  requestNumber,
  diningType,
  dates,
  meals,
}: AllMealSelectorProps) => {
  return (
    <section>
      <div
        className={`flex flex-col items-center justify-center p-4 transition-all ${diningType === DiningType.None ? "hidden" : ""}`}
      >
        {dates.map((date) => (
          <div key={date.toISOString()}>
            <DailyMealSelector
              date={date}
              diningType={diningType}
              meals={meals}
            />
            <BlankLine />
            <BlankLine />
            <BlankLine />
          </div>
        ))}
      </div>
      <div
        className={`flex items-center justify-center font-[poppins] text-lg font-semibold ${diningType === DiningType.None ? "" : "hidden"}`}
      >
        <span className="mx-4 text-justify">
          No Meals will be scheduled for delivery your stay hotel. Please select
          another Meal Delivery method if you want meals to be delivered.
          <br />
          <span className="flex w-full justify-center">Thank you!</span>
        </span>
      </div>
    </section>
  );
};

export default AllMealSelector;
