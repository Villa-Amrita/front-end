"use client";

import React from "react";
import Cookies from "universal-cookie";

const SpecialRequests = () => {
  const handleSpecialRequests = (specialRequests: string) => {
    const cookies = new Cookies(null, { path: "/" });
    cookies.set("specialRequests", specialRequests);
  };

  return (
    <div className="flex items-center justify-center">
      <textarea
        className="mx-4 flex w-[92%] rounded-lg border border-primary p-4 md:w-[95%] lg:mx-60 lg:w-[68.5%]"
        onChange={(e) => handleSpecialRequests(e.target.value)}
      ></textarea>
    </div>
  );
};

export default SpecialRequests;
