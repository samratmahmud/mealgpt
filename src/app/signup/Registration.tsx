import Buttons from "@/components/common/Button";
import React from "react";

interface GenderProps {
  handelNext?: () => void;
}

function registration({handelNext}: GenderProps) {
  return (
    <div className="max-w-[700px] mx-auto">
      <div className="md:text-3xl text-[17px] font-light leading-[151%] max-w-[500px] mx-auto md:mb-5 mb-[87px] mt-10 md:mt-0">
        <p className="font-semibold">Questionnaire Complete!</p> Register for
        free to start tracking your meals with ease
      </div>
      <div className="md:text-[63px] text-[45px] font-semibold leading-[105%] md:mb-20 mb-44">
        Log <span className="text-primary">meals</span> in seconds with your
        camera
      </div>
      <div className="inline-block mb-16">
        <Buttons
          onClick={handelNext}
          icon="/images/Google.png"
          rounded="16"
          className="whitespace-nowrap"
        >
          Sign in with Google
        </Buttons>
      </div>
    </div>
  );
}

export default registration;
