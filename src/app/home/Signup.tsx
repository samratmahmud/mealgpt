/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Signup() {
  return (
    <section className="signup-section after:content-['']">
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
            className="md:text-3xl text-xl md:font-semibold font-bold leading-normal text-white md:py-4 md:px-28 py-2 px-12 rounded-lg bg-primary whitespace-nowrap btn_drop_shadow focus:scale-95"
            tabIndex={-1}
          >
            Try it for free
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Signup;
