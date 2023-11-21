/* eslint-disable @next/next/no-img-element */
import Buttons from "@/components/common/Button";
import TextField from "@/components/common/TextField";
import React, {useState} from "react";
import Switch from "@/components/common/Switch";

const weight = [
  {
    title: "How much do you weight?",
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
    <div>
      <div className="flex flex-col gap-16 mb-14">
        {weight.map(({title, placeholder, name}, index) => (
          <div key={index} className="flex flex-col">
            <label className="mb-3">
              <p className="text-3xl leading-normal mb-9 cursor-text">
                {title}
              </p>
              <TextField name={name} placeholder={placeholder} />
            </label>
            <img
              className="w-full h-[1px]"
              src="/images/Vector 14.png"
              alt=""
            />
          </div>
        ))}
      </div>
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
  );
}

export default WeightHeight;
