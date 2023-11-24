"use client";
import GenderSelection from "./GenderSelection";
import React, {useState} from "react";
import TextField from "@/components/common/TextField";
import SelectOption from "@/components/common/SelectOption";

const goals = ["Gain Weight", "Lose Weight", "Gain Muscle", "Change My Diet"];

function GoalsGender() {
  return (
    <div>
      <div className="md:text-3xl text-[17px] leading-normal md:mb-10 mb-9 max-w-[261px] m-auto md:max-w-none">
        Let&apos;s get to know about you to calculate accurate goals
      </div>
      <div className="flex md:flex-col flex-row gap-2 justify-between mb-20 md:mb-10">
        <div className="mb-3 w-full">
          <GenderSelection defaultChecked label="Male" />
          <GenderSelection label="Female" />
        </div>
        <div className="w-[30%] md:w-full">
          <TextField placeholder="Age" type="text" />
        </div>
      </div>
      <div className="md:text-3xl text-[17px] leading-normal md:mb-9 mb-7">
        What are your goals?
      </div>
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
