import Buttons from "@/components/common/Button";
import SelectOption from "@/components/common/SelectOption";
import React, {useState} from "react";

const activityLevel = [
  "Very Active",
  "Active",
  "Slightly Active",
  "Not Active",
];

function ActivityLevel() {
  return (
    <div>
      <div className="md:text-3xl text-[17px] leading-normal md:mb-9 mb-7">
        What is your activity level?
      </div>
      <div className="flex flex-col gap-3">
        {activityLevel.map((label, index) => (
          <SelectOption name="activity_level" key={index} label={label} />
        ))}
      </div>
    </div>
  );
}

export default ActivityLevel;
