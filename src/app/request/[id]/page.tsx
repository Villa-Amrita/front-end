"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "~/components/NavBar";
import DailyMealSelector from "./components/DailyMealSelector";
import BlankLine from "~/components/BlankLine";
import DiningTypeSelector from "./components/DiningTypeSelector";
import ProceedButton from "./components/ProceedButton";

export default function HomePage({
  params,
}: Readonly<{ params: { id: number } }>) {
  const id: number = params.id;
  const requestNumber = parseInt(id.toString());
  const router = useRouter();

  const dates: Date[] = [
    new Date("2024-02-15"),
    new Date("2024-02-16"),
    new Date("2024-02-17"),
  ];

  const [diningType, setDiningType] = useState<DiningType>(DiningType.None);

  const diningTypeHandler = (diningType: DiningType) => {
    setDiningType(diningType);
  };

  const proceedHandler = () => {
    router.push(`/request/${requestNumber}/confirmation`);
  };

  return (
    <>
      <NavBar />
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
        <section>
          <div
            className={`flex flex-col items-center justify-center p-4 transition-all ${diningType === DiningType.None ? "hidden" : ""}`}
          >
            {dates.map((date) => (
              <div key={date.toISOString()}>
                <DailyMealSelector date={date} diningType={diningType} />
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
              No Meals will be scheduled for delivery your stay hotel. Please
              select another Meal Delivery method if you want meals to be
              delivered.
              <br />
              <span className="flex w-full justify-center">Thank you!</span>
            </span>
          </div>
        </section>
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
    </>
  );
}

export enum DiningType {
  Chef = "Chef",
  Restaurant = "Restaurant",
  None = "None",
}
