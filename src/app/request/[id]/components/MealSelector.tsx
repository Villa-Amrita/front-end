import React from "react";

import Accordion from "~/components/Accordion";

const MealSelector = () => {
  return (
    <div className="font-[poppins] text-base">
      <Accordion title="Breakfast"></Accordion>
      <Accordion title="Lunch"></Accordion>
      <Accordion title="Dinner"></Accordion>
    </div>
  );
};

export default MealSelector;
