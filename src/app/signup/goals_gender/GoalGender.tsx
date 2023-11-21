"use client";
import GenderSelection from "./GenderSelection";
import React, {useState} from "react";
import TextField from "@/components/common/TextField";
import SelectOption from "@/components/common/SelectOption";

const goals = ["Gain Weight", "Lose Weight", "Gain Muscle", "Change My Diet"];

function GoalsGender() {
  return (
    <div>
      <div className="text-3xl leading-normal mb-10">
        Let&apos;s get to know about you to calculate accurate goals
      </div>
      <div className="mb-3">
        <GenderSelection label="Male" />
        <GenderSelection label="Female" />
      </div>
      <div className="mb-10">
        <TextField placeholder="Age" type="text" />
      </div>
      <div className="text-3xl leading-normal mb-9">What are your goals?</div>
      <div className="flex flex-col gap-3">
        {goals.map((item, index) => (
          <SelectOption name="goals" key={index} label={item} />
        ))}
        <TextField placeholder="Others" />
      </div>
    </div>
  );
}

export default GoalsGender;
