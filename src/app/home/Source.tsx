/* eslint-disable @next/next/no-img-element */
import React from "react";

function Source() {
  return (
    <section className="bg-primary md:pt-32 pt-14  md:pb-40 pb-20 md:mb-8 mb-12">
      <div className="container">
        <div className="md:text-[40px] text-[34px] text-white font-bold leading-10 mb-7 md:text-center max-w-[218px] md:max-w-none">
          Proudly open-source
        </div>
        <div className="md:text-2xl text-xl text-white font-medium max-w-[585px] m-auto md:text-center md:mb-16 mb-7">
          Our source code is available on GitHub - feel free to read, review, or
          contribute to it however you want!
        </div>
        <div
          role="button"
          className="flex gap-3 bg-white md:py-2 py-1 md:px-16 px-7 rounded-lg justify-center md:max-w-[210px] max-w-[126px] md:m-auto text-2xl font-medium btn_drop_shadow"
        >
          <img className="hidden md:block" src="/images/Vector.svg" alt="" />{" "}
          Star
        </div>
      </div>
    </section>
  );
}

export default Source;
