/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <section className="mt-4 md:mb-44 mb-9">
      <div className="flex lg:flex-row flex-col items-center container">
        <div className="">
          <div className="lg:text-[80px] text-[34px] font-bold leading-[96%] lg:mb-10 mb-7">
            Set Your Goals & Track Your Progress
          </div>
          <div className="lg:text-2xl text-xl leading-[128%] text-[#121512] lg:mb-16 mb-8 max-w-[672px] mr-6 md:mr-0">
            Take a picture of your meals and instantly generate nutritional
            information{" "}
            <span className="lg:hidden">(calories, protien, etc...) </span>
          </div>
          <div className="md:mb-3.5 mb-1.5">
            <Link
              href="/"
              role="button"
              className="md:text-2xl text-xl md:font-semibold font-bold leading-normal bg-primary md:py-3.5 py-2 px-14 inline-block text-white rounded-lg btn_drop_shadow"
            >
              Try it for free
            </Link>
          </div>
          <div className="text-base leading-[121%] text-[#121512]/70">
            No credit card info needed
          </div>
        </div>
        <div className="lg:-mr-[190px]">
          <div className="header-svg">
            <img
              className="md:max-w-none"
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
