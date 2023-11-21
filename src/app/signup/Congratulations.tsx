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
      <div className="text-3xl leading-normal mb-3.5">Congratulations!</div>
      <div className="text-2xl leading-normal mb-[75px]">
        Your personalized daily goals are ready:
      </div>
      <div className="relative after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-[#D4636326] after:absolute after:-z-10 py-[77px] px-44 after:rounded-full after:blur-[54px] mb-12">
        <div className="flex gap-20 justify-between">
          {counts.map(({title, number}, index) => (
            <div key={index}>
              <div className="text-2xl leading-normal">{title}</div>
              <div className="text-6xl leading-normal text-primary font-bold -m-3">
                {number}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-[#D4636326] after:absolute after:-z-10 py-6 after:rounded-full after:blur-[54px] after:w-80 after:m-auto mb-16">
        <div className="text-2xl leading-normal">Pounds to lose per week</div>
        <div className="text-6xl leading-normal text-primary font-bold -m-3">
          2
        </div>
      </div>
      <div className="text-2xl leading-normal mb-11 max-w-[508px] m-auto">
        Get started with logging your meals and changing your life for the
        better!
      </div>
    </div>
  );
}

export default Congratulations;
