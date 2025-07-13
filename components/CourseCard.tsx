"use client";

import React from "react";
import { useState } from "react";

const CourseCard = () => {
  const [activeCourse, setActiveCourse] = useState(0);
  const box = [
    <div key="1" className="flex flex-col mx-10 mt-10 items-center gap-2">
      <h1 className="text-8xl font-black">23+</h1>
      <h2 className="text-6xl font-black">All course</h2>
      <h2 className="text-4xl font-bold">
        Courses you're powering through right now.
      </h2>
      <img src="image.png" alt="image" />
    </div>,
    <div key="2" className="flex flex-col mx-10 mt-10 items-center gap-2">
      <h1 className="text-8xl font-black">5+</h1>
      <h2 className="text-6xl font-black">Upcoming Courses</h2>
      <h2 className="text-4xl font-bold">New courses waiting for you</h2>
      <img src="image.png" alt="image" />
    </div>,
    <div key="3" className="flex flex-col mx-10 mt-10 items-center gap-2">
      <h1 className="text-8xl font-black">10+</h1>
      <h2 className="text-6xl font-black">Ongoing Courses</h2>
      <h2 className="text-4xl font-bold">
        Currently happening—don’t miss out!
      </h2>
      <img src="image.png" alt="image" />
    </div>,
  ];

  return (
    <main className="mx-[15rem] mt-10 ">
      <div className="flex w-full cursor-pointer">
        {box.map((label: any, i: any) => (
          <div
            key={i}
            className={`flex justify-center h-[32rem] w-[9rem] rounded-xl m-2 transition-all duration-1000 overflow-hidden ${
              activeCourse === i
                ? "grow-[5] h-[30rem] w-[5rem] bg-[#C33241] text-white"
                : "grow-[1] bg-[#f9ebec] text-[#C33241]"
            }`}
            onClick={() => setActiveCourse(i)}
          >
            {label}
          </div>
        ))}
      </div>
    </main>
  );
};

export default CourseCard;
