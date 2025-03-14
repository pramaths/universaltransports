import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineItem[] }) => {
  return (
    <div className="relative mx-auto max-w-[1200px]">
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 transform bg-gradient-to-b from-[#99ccff] to-[#66b3ff]/20" />
      {data.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  );
};

const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative mb-20 grid grid-cols-1 md:grid-cols-2 md:gap-10 ${
        isEven ? "md:rtl" : ""
      }`}
    >
      <div className="hidden md:block" />
      <div
        className={`relative rounded-lg border border-[#99ccff]/20 bg-white p-6 shadow-lg ${
          isEven ? "rtl:text-right" : ""
        }`}
      >
        <div
          className={`absolute top-6 hidden h-[2px] w-10 bg-[#99ccff] md:block ${
            isEven ? "-left-10" : "-right-10"
          }`}
        />
        <div
          className={`absolute top-[26px] hidden h-4 w-4 rounded-full border-2 border-[#99ccff] bg-white md:block ${
            isEven ? "-left-[18px]" : "-right-[18px]"
          }`}
        />
        <div className="mb-2 flex items-center">
          <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#99ccff] text-white md:hidden">
            <span className="text-sm">{index + 1}</span>
          </div>
          <h3 className="text-xl font-bold text-[#99ccff]">{item.title}</h3>
        </div>
        <div className="mt-4">{item.content}</div>
      </div>
    </motion.div>
  );
}; 