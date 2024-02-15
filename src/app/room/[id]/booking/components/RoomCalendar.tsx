"use client";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

interface RoomCalendarProps {
  roomNumber: number;
}

const RoomCalendar = ({ roomNumber }: RoomCalendarProps) => {
  return (
    <>
      <div className="mx-4 my-3 lg:hidden">
        <FullCalendar
          height={500}
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
          events={[
            {
              title: "Booked",
              date: "2024-02-01",
            },
          ]}
        />
      </div>
    </>
  );
};

export default RoomCalendar;
