/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Signup() {
  return (
    <section className="lg:py-44 py-24 relative md:mb-12 after:content[''] after:block after:inset-0 after:bg-[#D46363]/[15%] after:absolute after:[filter:blur(54px)] after:-z-10">
      <div className="container">
        <div className="flex lg:flex-row flex-col lg:gap-16 items-center">
          <div className="md:text-[40px] text-2xl font-medium leading-[102%] md:max-w-[570px] max-w-[324px] text-center md:text-left">
            Sign up now and experience the future of dietary tracking!
          </div>
          <div className="lg:-mt-[8%] mb-6 lg:mb-0">
            <img
              className="hidden lg:block"
              src="/images/Vector 7.svg"
              alt=""
            />
            <img className="lg:hidden" src="/images/Vector 7 (1).svg" alt="" />
          </div>
          <Link
            href="/signup"
            className="md:text-3xl text-xl md:font-semibold font-bold leading-normal text-white md:py-4 md:px-[106px] py-[7px] px-12 rounded-lg bg-primary whitespace-nowrap"
          >
            Try it for free
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Signup;
