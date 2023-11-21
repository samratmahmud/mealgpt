import Buttons from "@/components/common/Buttons";
import GenderItems from "@/components/common/GenderItems";
import React from "react";

const weight = [
  {
    title: "How much do you weigh?",
    placeholder: "15 lbs",
  },
  {
    title: "What is your goal weight?",
    placeholder: "20 lbs",
  },
  {
    title: "How tall are you?",
    placeholder: "5 ft, 2 in",
  },
];

interface WeightHeightProps {
  handelNext?: () => void;
}

function WeightHeight({handelNext}: WeightHeightProps) {
  return (
    <section>
      <div className="container max-w-[581px] m-auto text-center">
        <div className="flex flex-col gap-16 mb-14">
          {weight.map(({title, placeholder}, index) => (
            <div key={index} className="group">
              <div className="text-3xl leading-normal mb-9">{title}</div>
              <div className="text-black mb-3">
                <input
                  className="w-full px-16 py-2.5 placeholder:text-2xl text-2xl placeholder:text-center border focus:border-gray-300 border-[#838383] rounded-lg .gender_item_shadow focus:outline-none"
                  type="text"
                  id=""
                  placeholder={placeholder}
                />
              </div>
              <div className="group-last:hidden">
                <img
                  className="w-full h-[1px]"
                  src="/images/Vector 14.png"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3.5 items-center justify-center mb-[77px]">
          <div className="text-xl font-medium leading-normal text-black/30">
            Imperial System
          </div>
          <div className="bg-primary relative py-3.5 px-7 rounded-full">
            <span className="absolute top-0.5 right-0.5 w-[22px] h-[22px] bg-white rounded-full"></span>
          </div>
          <div className="text-xl font-medium leading-normal">
            Metric System
          </div>
        </div>
        <div className="mb-28">
          <Buttons onClick={handelNext} name="CONTINUE" />
        </div>
      </div>
    </section>
  );
}

export default WeightHeight;
