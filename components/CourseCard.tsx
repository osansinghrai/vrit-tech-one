"use client";

import { motion } from "framer-motion";

interface CourseCardProps {
  title: string;
  count: number;
  subText: string;
  expanded?: boolean;
  onClick: () => void;
}

export default function CourseCard({
  title,
  count,
  subText,
  expanded = false,
  onClick,
}: CourseCardProps) {
  return (
    <div>
      <motion.div
        layout
        onClick={onClick}
        transition={{ layout: { duration: 0.5, type: "spring" } }}
        className={` mt-20
        rounded-2xl flex gap-2 shadow-md cursor-pointer transition-all duration-300 overflow-hidden
        ${
          expanded
            ? "bg-[#C33241] text-white w-[35rem] h-[35rem]"
            : "bg-pink-50 text-[#C33241] w-[18rem] h-[35rem]"
        }
        p-6
      `}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="text-9xl font-black flex">{count}+</div>
          <div className="text-6xl font-bold flex flex-col items-center gap-2">
            <div className="text-6xl font-bold">{title}</div>
            <p className="mt-2 text-4xl">{subText}</p>
          </div>
        </div>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm "
          ></motion.div>
        )}
      </motion.div>
    </div>
  );
}
