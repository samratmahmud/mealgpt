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

function Journey() {
  return (
    <section className="container mb-52">
      <div className="text-2xl leading-[121%] text-primary mb-5">
        How it Works
      </div>
      <div className="flex gap-9 mb-32">
        <div className="text-[40px] font-medium leading-[41px] max-w-[733px]">
          Start Your Journey to a Healthier You Today in 3 Easy Steps!
        </div>
        <div className="bg-black/50 w-full max-w-[371px] h-[1px] mt-5" />
      </div>
      <div className="flex text-center gap-14">
        {steps.map(({title, contain}, index) => (
          <div key={index} className="">
            <div className="text-3xl text-white bg-primary py-1.5 px-4 rounded mb-[72px] inline-block">
              {index + 1}
            </div>
            <div className="text-3xl mb-7 text-[#121512]">{title}</div>
            <div className="text-2xl text-[#121512]/60">{contain}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;
