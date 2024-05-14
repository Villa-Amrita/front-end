/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BlankLine from "~/components/BlankLine";
import DiningTypeSelector from "./DiningTypeSelector";
import ProceedButton from "./ProceedButton";
import AllMealSelector from "./AllMealSelector";
import { DiningType } from "../page";

interface ContentProps {
  requestNumber: number;
  dates: Date[];
  meals: any[];
}

const Content = ({ requestNumber, dates, meals }: ContentProps) => {
  const router = useRouter();
  const [diningType, setDiningType] = useState<DiningType>(DiningType.None);

  const diningTypeHandler = (diningType: DiningType) => {
    setDiningType(diningType);
  };

  const proceedHandler = () => {
    router.push(`/request/${requestNumber}/confirmation`);
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

export default Content;
