import Buttons from "@/components/common/Buttons";
import React from "react";

function QuestionnaireComplete() {
  return (
    <section>
      <div className="container max-w-[689px] m-auto text-center mb-[478px]">
        <div className="text-3xl font-light leading-[151%] max-w-[500px] m-auto mb-5">
          <p className="font-semibold">Questionnaire Complete!</p> Register for
          free to start tracking your meals with ease
        </div>
        <div className="text-[63px] font-semibold leading-[105%] mb-[89px]">
          Log <span className="text-primary">meals</span> in seconds with your
          camera
        </div>
        <div className="inline-block">
          <Buttons
            icon="/images/Google.png"
            name="Sign in with Google"
            rounded="16"
          />
        </div>
      </div>
    </section>
  );
}

export default QuestionnaireComplete;
