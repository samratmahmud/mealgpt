/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Signup() {
  return (
    <section className="py-44 relative mb-12 after:content[''] after:block after:inset-0 after:bg-[#D46363]/[15%] after:absolute after:[filter:blur(54px)] after:-z-10">
      <div className="container">
        <div className="flex gap-16 items-center">
          <div className="text-[40px] font-medium leading-[102%] max-w-[570px]">
            Sign up now and Signup the future of dietary tracking!
          </div>
          <div className="-mt-[8%]">
            <img src="/images/Vector 7.svg" alt="" />
          </div>
          <Link
            href="/signup"
            className="text-3xl font-semibold text-white py-4 px-[106px] rounded-lg bg-primary whitespace-nowrap"
          >
            Try it for free
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Signup;
