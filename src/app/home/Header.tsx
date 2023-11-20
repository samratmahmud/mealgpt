/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <section className="mt-4 mb-44">
      <div className="flex items-center container">
        <div className="">
          <div className="text-[80px] font-bold leading-[96%] mb-10">
            Set Your Goals & Track Your Progress
          </div>
          <div className="text-2xl text-[#121512] mb-16 max-w-[672px]">
            Take a picture of your meals and instantly generate nutritional
            information
          </div>
          <div className="mb-3.5">
            <Link
              href="/foodvlog"
              role="button"
              className="text-2xl font-semibold bg-primary py-[13px] px-14 inline-block text-white rounded-lg btn_drop_shadow"
            >
              Try it for free
            </Link>
          </div>
          <div className="text-base leading-[121%] text-[#121512]/70">
            No credit card info needed
          </div>
        </div>
        <div className="-mr-[190px]">
          <div className="relative z-0 after:block after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-[#D46363]/[15%] after:rounded-full after:w-full after:h-full after:absolute pl-0 pr-48 pt-[105px] py-[92px] after:[filter:blur(54px)] after:-z-10">
            <img
              className="max-w-none"
              src="/images/header_image (1).svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
