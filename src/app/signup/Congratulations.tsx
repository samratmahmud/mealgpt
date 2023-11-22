import Button from "@/components/common/Button";
import React from "react";

const counts = [
  {
    title: "Calories",
    number: "1810",
  },
  {
    title: "Protein (g)",
    number: "90",
  },
  {
    title: "Carbs (g)",
    number: "123",
  },
];

interface GenderProps {
  handelNext?: () => void;
}

function Congratulations({handelNext}: GenderProps) {
  return (
    <div className="max-w-[983px] mx-auto">
      <div className="md:text-3xl text-xl leading-normal md:mb-3.5 mb-1.5 mt-9 md:mt-0">
        Congratulations!
      </div>
      <div className="md:text-2xl text-[17px] leading-normal md:mb-[75px] mb-2.5 max-w-[275px] m-auto md:max-w-none">
        Your personalized daily goals are ready:
      </div>
      <div className="relative after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-[#D4636326] after:absolute after:-z-10 md:py-[77px] py-9 md:px-40 px-14 after:rounded-full after:blur-[54px] md:mb-12 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-28 gap-10">
          {counts.map(({title, number}, index) => (
            <div
              key={index}
              className="flex flex-col items-center first:col-span-2 md:first:col-span-1"
            >
              <div className="md:text-2xl text-[17px] leading-normal whitespace-nowrap mb-1 md:mb-2">
                {title}
              </div>
              <div className="md:text-6xl text-[34px] leading-normal text-primary font-bold -m-3">
                {number}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-[#D4636326] after:absolute after:-z-10 py-6 after:rounded-full after:blur-[54px] md:after:w-80 after:w-44 after:m-auto md:mb-16 mb-8">
        <div className="md:text-2xl text-[17px] leading-normal">
          Pounds to lose per week
        </div>
        <div className="md:text-6xl text-[34px] leading-normal text-primary font-bold">
          2
        </div>
      </div>
      <div className="md:text-2xl text-xl leading-normal md:mb-11 mb-[53px] md:max-w-[508px] max-w-[240px] m-auto">
        Get started with logging your meals and changing your life{" "}
        <span className="hidden md:inline">for the better!</span>
      </div>
    </div>
  );
}

export default Congratulations;
