import React, { useState } from "react";
import { DiningType } from "../page";
import BlankLine from "~/components/BlankLine";

interface DiningTypeSelectorProps {
  handleDiningTypeSelection: (diningType: DiningType) => void;
}

const DiningTypeSelector = ({
  handleDiningTypeSelection,
}: DiningTypeSelectorProps) => {
  const [diningType, setDiningType] = useState<DiningType>(DiningType.None);

  const handleClick = (diningType: DiningType) => {
    handleDiningTypeSelection(diningType);
    setDiningType(diningType);
  };

  return (
    <div className="flex w-full flex-col items-center justify-between">
      <span className="font-[poppins] text-lg font-bold">
        Select your Meal Delivery Method:
      </span>
      <BlankLine />
      <div className="flex w-full items-center justify-between font-[poppins] lg:w-3/4">
        <button
          className={`w-1/4 rounded-md border border-primary px-2 py-2 font-bold transition-colors ${diningType === DiningType.Chef ? "bg-primary text-white" : "bg-white text-primary"}`}
          onClick={() => handleClick(DiningType.Chef)}
        >
          {DiningType.Chef}
        </button>
        <button
          className={`w-1/4 min-w-fit rounded-md border border-primary px-2 py-2 font-bold transition-colors ${diningType === DiningType.Restaurant ? "bg-primary text-white" : "bg-white text-primary"}`}
          onClick={() => handleClick(DiningType.Restaurant)}
        >
          {DiningType.Restaurant}
        </button>
        <button
          className={`w-1/4 rounded-md border border-primary px-2 py-2 font-bold transition-colors ${diningType === DiningType.None ? "bg-primary text-white" : "bg-white text-primary"}`}
          onClick={() => handleClick(DiningType.None)}
        >
          {DiningType.None}
        </button>
      </div>
    </div>
  );
};

export default DiningTypeSelector;
