/* eslint-disable @next/next/no-img-element */
import Buttons from "@/components/common/Button";
import TextField from "@/components/common/TextField";
import React, {useState} from "react";
import Switch from "@/components/common/Switch";

const weight = [
  {
    title: "How much do you weight?",
    subTitle: "An estimate is fine. You can update this later.",
    placeholder: "15 lbs",
    name: "current_weight",
  },
  {
    title: "What is your goal weight?",
    placeholder: "20 lbs",
    name: "goal_weight",
  },
  {
    title: "How tall are you?",
    placeholder: "5 ft, 2 in",
    name: "current_height",
  },
];

function WeightHeight() {
  const [system, setSystem] = useState(true);

  return (
    <section>
      <div className="flex flex-col md:gap-16 gap-12 md:mb-20 mb-36">
        {weight.map(({title, placeholder, name, subTitle}, index) => (
          <div key={index} className="flex flex-col group">
            <label className="md:mb-3 mb-0 flex flex-col">
              <p className="md:text-3xl text-[17px] leading-normal cursor-text md:mb-9 mb-6 group-first:mb-0 md:group-first:mb-9">
                {title}
              </p>
              <p className="md:hidden mb-1 md:mb-0 text-[13px]">{subTitle}</p>
              <TextField name={name} placeholder={placeholder} />
            </label>
            <img
              className="w-full h-[1px] group-last:hidden hidden md:block"
              src="/images/Vector 14.png"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        <div className="flex gap-3.5 items-center justify-center mb-6">
          <div
            className={`duration-100 text-xl font-medium leading-normal ${
              system && "opacity-30"
            }`}
          >
            Imperial System
          </div>
          <Switch
            checked={system}
            onChange={(e) => setSystem(e.target.checked)}
          />
          <div
            className={`duration-100 text-xl font-medium leading-normal ${
              !system && "opacity-30"
            }`}
          >
            Metric System
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeightHeight;
