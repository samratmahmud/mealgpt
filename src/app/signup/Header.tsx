"use client";
import SignupToggle from "@/components/common/SignupToggle";
import Link from "next/link";
import React from "react";
import Gender from "./Gender";
import WeightHeight from "./WeightHeight";
import ActivityLevel from "./ActivityLevel";
import QuestionnaireComplete from "./QuestionnaireComplete";
import Congratulations from "./Congratulations";

const pages = [
  {
    name: "Goals & Gender",
  },
  {
    name: "Weight & Height",
  },
  {
    name: "Activity Level",
  },
];

function Header() {
  const [tab, setTab] = React.useState(0);

  const handelNext = () => {
    setTab((v) => {
      return v + 1;
    });
  };

  return (
    <section>
      <div className="container pt-4 mb-9">
        <div className="bg-[#D9D9D9] w-full h-1 relative mb-5">
          <span className="absolute bg-primary w-[4%] h-1"></span>
        </div>
        <div className="flex gap-[25%] mb-8">
          <div role="button" className="hidden lg:block">
            <img src="/images/Arrow.svg" alt="" />
          </div>
          <div className="flex gap-5">
            {pages.map(({name}, index) => (
              <SignupToggle
                key={index}
                number={index + 1}
                title={name}
                handelClick={() => setTab(index)}
                isActive={tab === index}
              />
            ))}
          </div>
        </div>
        <div className="max-w-[705px] m-auto">
          <img className="w-full h-[1px]" src="/images/Vector 14.png" alt="" />
        </div>
      </div>
      {tab === 0 && <Gender handelNext={handelNext} />}
      {tab === 1 && <WeightHeight handelNext={handelNext} />}
      {tab === 2 && <ActivityLevel handelNext={handelNext} />}
      {tab === 3 && <QuestionnaireComplete handelNext={handelNext} />}
      {tab === 4 && <Congratulations />}
    </section>
  );
}

export default Header;
