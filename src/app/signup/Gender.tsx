"use client";
import Buttons from "@/components/common/Buttons";
import CheckBox from "@/components/common/CheckBox";
import GenderItems from "@/components/common/GenderItems";
import React, {useState} from "react";

const items = [
  "Gain Weight",
  "Lose Weight",
  "Gain Muscle",
  "Change My Diet",
  "Other",
];

interface GenderProps {
  handelNext?: () => void;
}

function Gender({handelNext}: GenderProps) {
  const [tab, setTab] = useState(1000000);
  return (
    <section>
      <div className="max-w-[605px] m-auto text-center container mb-28">
        <div className="text-3xl leading-normal mb-10">
          Let’s get to know about you to calculate accurate goals
        </div>
        <div className="mb-3">
          <CheckBox name="Male" />
          <CheckBox name="Female" />
        </div>
        <div className="text-[#00000066] mb-10">
          <input
            role="button"
            className="text-2xl placeholder:text-2xl py-2 px-16 placeholder:text-center w-full focus:outline-none border border-[#838383] rounded-lg gender_item_shadow"
            type="text"
            id=""
            placeholder="Age"
          />
        </div>
        <div className="text-3xl leading-normal mb-9">What are your goals?</div>
        <div className="flex flex-col gap-3 mb-9">
          {items.map((item, index) => (
            <div key={index} className="last:text-[#00000066]">
              <GenderItems
                item={item}
                isActive={tab === index}
                handelClick={() => setTab(index)}
              />
            </div>
          ))}
        </div>
        <div>
          <Buttons onClick={handelNext} name="CONTINUE" />
        </div>
      </div>
    </section>
  );
}

export default Gender;
