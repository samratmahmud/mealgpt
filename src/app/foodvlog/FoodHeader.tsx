/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function FoodHeader() {
  return (
    <section>
      <div className="container mt-8">
        <img className="h-[1px] w-full" src="/images/Vector 9.png" alt="" />
        <div className="flex justify-between mt-2">
          <button role="button">
            <img className="opacity-30" src="/images/Arrow.svg" alt="" />
          </button>
          <div className="flex flex-col gap-3 items-center">
            <h4 className="text-3xl font-semibold leading-normal">Day 1</h4>
            <p className="text-2xl leading-normal mb-12">Thursday</p>
          </div>
          <Link href="/take_upload" role="button">
            <img className="rotate-180" src="/images/Arrow.svg" alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FoodHeader;
