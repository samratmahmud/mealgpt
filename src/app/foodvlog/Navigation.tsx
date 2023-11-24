/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <section>
      <div className="container mt-8">
        <img className="h-[1px] w-full" src="/images/Vector 9.png" alt="" />
        <div className="flex items-start justify-between mt-2">
          <button role="button">
            <img className="opacity-30" src="/images/Arrow.svg" alt="" />
          </button>
          <div className="flex flex-col md:gap-3 gap-1.5 items-center md:mb-12 mb-3">
            <h4 className="md:text-3xl text-xl font-semibold leading-normal">
              Day 1
            </h4>
            <p className="md:text-2xl text-[17px] leading-normal">Thursday</p>
          </div>
          <Link href="/upload_meal" role="button">
            <img className="rotate-180" src="/images/Arrow.svg" alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
