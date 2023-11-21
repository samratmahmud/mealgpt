/* eslint-disable @next/next/no-img-element */
"use client";
import React, {useState} from "react";
import Pagination from "./Pagination";
import Navbar from "@/components/global/navbar/Navbar";
import GoalGender from "./goals_gender/GoalGender";
import WeightHeight from "./WeightHeight";
import ActivityLevel from "./ActivityLevel";
import Button from "@/components/common/Button";
import QuestionnaireComplete from "./Registration";
import Congratulations from "./Congratulations";

const tabs = ["Goals & Gender", "Weight & Height", "Activity Level"];

function PersonalizationPage() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handelNext = () => {
    setCurrentPage((v) => {
      return v + 1;
    });
  };
  const handelPrev = () => {
    setCurrentPage((v) => {
      return v - 1 < 0 ? 0 : v - 1;
    });
  };

  return (
    <div className="flex flex-col justify-between min-h-screen pb-20">
      <div>
        <Navbar />

        <div className="container mt-4 mb-9">
          <div className="bg-[#D9D9D9] w-full h-1 relative mb-5">
            <span
              className="absolute bg-primary h-1 duration-200 max-w-full"
              style={{width: `${(100 / tabs.length) * (currentPage + 1)}%`}}
            />
          </div>
          <div className="flex gap-[25%] mb-8">
            <div
              onClick={handelPrev}
              role="button"
              className={`hidden lg:block ${
                currentPage === 0 ? "opacity-30" : ""
              }`}
            >
              <img src="/images/Arrow.svg" alt="" />
            </div>
            {currentPage < tabs.length && (
              <Pagination
                tabs={tabs}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            )}
          </div>
          <img className="w-full h-[1px]" src="/images/Vector 14.png" alt="" />
        </div>

        {currentPage < tabs.length && (
          <div className="container max-w-xl text-center">
            {currentPage === 0 && <GoalGender />}
            {currentPage === 1 && <WeightHeight />}
            {currentPage === 2 && <ActivityLevel />}
          </div>
        )}
        {currentPage >= tabs.length && (
          <div className="container text-center">
            {currentPage === 3 && (
              <QuestionnaireComplete handelNext={handelNext} />
            )}
            {currentPage === 4 && (
              <div>
                <Congratulations handelNext={handelNext} />
                <Button href="/foodvlog">CONTINUE</Button>
              </div>
            )}
          </div>
        )}
      </div>

      {currentPage < tabs.length && (
        <div className="flex justify-center mt-10">
          <Button onClick={handelNext}>CONTINUE</Button>
        </div>
      )}
    </div>
  );
}

export default PersonalizationPage;
