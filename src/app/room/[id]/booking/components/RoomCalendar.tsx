"use client";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { type DateSelectArg } from "@fullcalendar/core/index.js";
import Cookies from "universal-cookie";

interface RoomCalendarProps {
  roomNumber: number;
}

const RoomCalendar = ({ roomNumber }: RoomCalendarProps) => {
  const cookies = new Cookies(null, { path: "/" });

  const handleDateClick = (arg: DateSelectArg) => {
    cookies.set("startDate", arg.startStr);
    cookies.set("endDate", arg.endStr);
  };

  return (
    <>
      <div className="my-3 lg:hidden">
        <FullCalendar
          height={425}
          aspectRatio={1.35}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          selectOverlap={false}
          events={[
            {
              title: "Booked",
              date: "2024-02-01",
            },
          ]}
          select={handleDateClick}
        />
      </div>
      <div className="mx-60 my-4 hidden lg:block">
        <FullCalendar
          height={700}
          aspectRatio={1.35}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          selectOverlap={false}
          longPressDelay={100}
          events={[
            {
              title: "Booked",
              date: "2024-02-01",
            },
          ]}
          select={handleDateClick}
        />
      </div>
    </>
  );
};

export default RoomCalendar;
