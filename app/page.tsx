"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import HeadingTitle from "@/components/HeadingTitle";

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const cards = [
    {
      title: "All Courses",
      count: 23,
      subText: "Courses you're powering through right now.",
    },
    {
      title: "Upcoming Courses",
      count: 5,
      subText: "New courses waiting for you.",
    },
    {
      title: "Ongoing Courses",
      count: 10,
      subText: "Currently happening—don’t miss out!",
    },
  ];

  return (
    <main className="min-h-screen bg-white  p-6 md:p-12">
      <HeadingTitle />
      <motion.div layout className="max-w-6xl mx-auto flex flex-row gap-14">
        {cards.map((card, i) => (
          <CourseCard
            key={i}
            {...card}
            expanded={expandedIndex === i}
            onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
          />
        ))}
      </motion.div>
    </main>
  );
}
