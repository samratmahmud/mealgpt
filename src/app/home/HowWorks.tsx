/* eslint-disable @next/next/no-img-element */
import React from "react";

const steps = [
  {
    title: "Sign Up & Set Your Goals",
    contain:
      "After signing up, answer a few questions about your dietary preferences and health goals to receive a personalized daily calorie and nutrient target.",
  },
  {
    title: "Track Your Progress",
    contain:
      "Effortlessly monitor your daily intake and progress by logging your meals and snacks while receiving real-time feedback on your dietary performance.",
  },
  {
    title: "Visualize with Food Photos",
    contain:
      "Effortlessly monitor your daily intake and progress by logging your meals and snacks while receiving real-time feedback on your dietary performance.",
  },
];

function HowWorks() {
  return (
    <section className="container mb-52">
      <div className="text-2xl leading-[121%] text-primary mb-5">
        How it Works
      </div>
      <div className="grid grid-cols-2 gap-9 mb-32">
        <div className="text-[40px] font-medium leading-[41px]">
          Start Your Journey to a Healthier You Today in 3 Easy Steps!
        </div>
        <img
          src="/images/Vector 14.png"
          className="h-[1px] w-full mt-5"
          alt=""
        />
      </div>
      <div className="flex text-center gap-12">
        {steps.map(({title, contain}, index) => (
          <div key={index} className="group">
            <div className="mb-[72px] inline-block relative z-0">
              <span className="relative z-20 text-white bg-primary py-1.5 px-4 rounded text-3xl block">
                {index + 1}
              </span>
              <img
                className="h-[1px] w-[450px] max-w-none absolute z-10 top-1/2 translate-y-1/2 group-last:hidden"
                src="/images/Vector 37 (1).png"
                alt=""
              />
            </div>
            <div className="text-3xl mb-6 text-[#121512]">{title}</div>
            <div className="text-2xl text-[#121512]/60">{contain}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowWorks;
