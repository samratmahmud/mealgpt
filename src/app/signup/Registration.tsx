import Buttons from "@/components/common/Button";
import React from "react";

interface GenderProps {
  handelNext?: () => void;
}

function registration({handelNext}: GenderProps) {
  return (
    <div className="max-w-[700px] mx-auto">
      <div className="text-3xl font-light leading-[151%] max-w-[500px] mx-auto mb-5">
        <p className="font-semibold">Questionnaire Complete!</p> Register for
        free to start tracking your meals with ease
      </div>
      <div className="text-[63px] font-semibold leading-[105%] mb-20">
        Log <span className="text-primary">meals</span> in seconds with your
        camera
      </div>
      <div className="inline-block">
        <Buttons onClick={handelNext} icon="/images/Google.png" rounded="16">
          Sign in with Google
        </Buttons>
      </div>
    </div>
  );
}

export default registration;
