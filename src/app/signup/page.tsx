import React from "react";
import Header from "./Header";
import Navbar from "@/components/global/Navbar";
import Gender from "./Gender";
import WeightHeight from "./WeightHeight";
import ActivityLevel from "./ActivityLevel";
import QuestionnaireComplete from "./QuestionnaireComplete";
import Congratulations from "./Congratulations";

function page() {
  return (
    <main>
      <Navbar />
      <Header />
      {/* <Gender /> */}
      {/* <WeightHeight /> */}
      {/* <ActivityLevel /> */}
      <QuestionnaireComplete />
      <Congratulations />
    </main>
  );
}

export default page;
