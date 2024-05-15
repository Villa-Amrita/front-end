/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  createReservationDailyMeal,
  createReservationDailyMealSet,
} from "lib/client";
import { signin, type SigninUser } from "~/app/utils/Authentication";
import Cookies from "universal-cookie";
import { type MealSelection } from "./AllMealSelector";
import { DiningType } from "../page";
import BlankLine from "~/components/BlankLine";
import DiningTypeSelector from "./DiningTypeSelector";
import ProceedButton from "./ProceedButton";
import AllMealSelector from "./AllMealSelector";

interface ContentProps {
  requestNumber: number;
  dates: Date[];
  meals: any[];
}

const Content = ({ requestNumber, dates, meals }: ContentProps) => {
  // Initialize meal selections with default meal IDs (Referring to none meal entries)
  const initialMealSelections: MealSelection[] = dates.map((date) => ({
    date: date,
    breakfastMealId: 0,
    lunchMealId: 0,
    dinnerMealId: 0,
  }));

  const [mealSelections, setMealSelections] = useState(initialMealSelections);
  const [diningType, setDiningType] = useState<DiningType>(DiningType.None);

  //Function to update meal selections
  const updateMealSelection = (
    date: Date,
    breakfastMealId: number,
    lunchMealId: number,
    dinnerMealId: number,
  ) => {
    setMealSelections((prevSelections) =>
      prevSelections.map((selection) =>
        selection.date === date
          ? {
              ...selection,
              breakfastMealId: breakfastMealId,
              lunchMealId: lunchMealId,
              dinnerMealId: dinnerMealId,
            }
          : selection,
      ),
    );
  };

  const diningTypeHandler = (diningType: DiningType) => {
    setDiningType(diningType);
  };

  const proceedHandler = async () => {
    try {
      await Promise.all(
        mealSelections.map(async (mealSelection: MealSelection) => {
          const reservationDailyMealSet = await createReservationDailyMealSet({
            reservationId: requestNumber,
            date: formatDate(mealSelection.date),
          });
          const reservationDailyMealSetId = reservationDailyMealSet.id;

          await createReservationDailyMeal({
            mealId:
              mealSelection.breakfastMealId == 0
                ? 1
                : mealSelection.breakfastMealId,
            type: "BREAKFAST",
            quantity: 1,
            reservationDailyMealSetId: reservationDailyMealSetId,
          });
          await createReservationDailyMeal({
            mealId:
              mealSelection.lunchMealId == 0 ? 1 : mealSelection.lunchMealId,
            type: "LUNCH",
            quantity: 1,
            reservationDailyMealSetId: reservationDailyMealSetId,
          });
          await createReservationDailyMeal({
            mealId:
              mealSelection.dinnerMealId == 0 ? 1 : mealSelection.dinnerMealId,
            type: "DINNER",
            quantity: 1,
            reservationDailyMealSetId: reservationDailyMealSetId,
          });
        }),
      ).then(async () => {
        const cookies = new Cookies();
        const userEmail = cookies.get("authEmail");
        const userPassword = cookies.get("authPassword");

        if (!userEmail || !userPassword) {
          throw new Error("No user credentials found.");
        }

        const user: SigninUser = {
          email: userEmail,
          password: userPassword,
        };

        await signin(user).then(() => {
          window.location.href = `/request/${requestNumber}/confirmation`;
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="overflow-x-hidden py-6">
      <section>
        <h1 className="flex items-center justify-center font-[poppins] text-2xl font-bold text-primary md:text-3xl">
          Meal Planning
        </h1>
        <span className="flex items-center justify-center font-[poppins] font-semibold">
          Request Ticket: {requestNumber}
        </span>
      </section>
      <BlankLine />
      <BlankLine />
      <BlankLine />
      <section className="mx-4 flex items-center justify-center lg:mx-0">
        <DiningTypeSelector handleDiningTypeSelection={diningTypeHandler} />
      </section>
      <BlankLine />
      <BlankLine />
      <BlankLine />
      <AllMealSelector
        requestNumber={requestNumber}
        diningType={diningType}
        dates={dates}
        meals={meals}
        updatemealSelection={updateMealSelection}
      />
      {diningType === DiningType.None && (
        <>
          <BlankLine />
          <BlankLine />
          <BlankLine />
        </>
      )}
      <section className="flex w-full items-center justify-center">
        <ProceedButton handleProceed={proceedHandler} />
      </section>
    </main>
  );
};

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default Content;
