"use client";
import Buttons from "@/components/common/Buttons";
import GenderItems from "@/components/common/GenderItems";
import React, {useState} from "react";

const items = [
  "Gain Weight",
  "Lose Weight",
  "Gain Muscle",
  "Gain Muscle",
  "Other",
];

const genderName = ["Male", "Female"];

function Gender() {
  const [tab, setTab] = useState(0);
  return (
    <section>
      <div className="max-w-[605px] m-auto text-center container mb-28">
        <div className="text-3xl leading-normal mb-10">
          Let’s get to know about you to calculate accurate goals
        </div>
        <div></div>
        <div className="text-[#00000066] mb-10">
          <GenderItems item="Age" />
        </div>
        <div className="text-3xl leading-normal mb-9">What are your goals?</div>
        <div className="flex flex-col gap-3 mb-9">
          {items.map((item, index) => (
            <div key={index} className="last:text-[#00000066]">
              <GenderItems item={item} />
            </div>
          ))}
        </div>
        <div>
          <Buttons name="CONTINUE" />
        </div>
      </div>
    </section>
  );
}

export default Gender;
