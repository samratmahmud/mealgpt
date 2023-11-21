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
      <div className="text-3xl leading-normal mb-9">
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
